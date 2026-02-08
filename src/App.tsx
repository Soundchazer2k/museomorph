import { Fragment, useCallback, useEffect, useMemo, useState, createContext, useContext } from 'react';
import type { DragEvent, Dispatch, SetStateAction } from 'react';
import './App.css';
import { ApiKeyModal } from './components/ApiKeyModal';
import { StyleImporterModal } from './components/StyleImporterModal';
import { loadNanoBananaApiKey } from './lib/nanobanana/apiKey';
import { generateArtwork } from './lib/nanobanana/client';
import { chooseNanoBananaRatio } from './lib/nanobanana/ratios';
import type { RatioDecision } from './lib/nanobanana/ratios';
import { buildPrompt } from './lib/prompt/buildPrompt';
import type { ParsedStyleMarkdown, ManifestStyleEntry as PromptManifestStyle } from './lib/prompt/types';
import { parseStyleMarkdown as parsePromptMarkdown } from './lib/prompt/parseStyle';
import { useRecentStyles, type RecentStyleEntry } from './hooks/useRecentStyles';
import { useFavorites } from './hooks/useFavorites';

type ManifestCollection = { id: string; styles: string[] };

type StyleEntry = PromptManifestStyle & {
  about?: string;
  hero_image?: string;
  ratios: string[];
  modes: string[];
  safety_profile: string[];
  multi_subject?: {
    allowed: boolean;
    max_subjects?: number;
    layout_hint?: string;
    identity_priority?: string[];
  };
  sections_index: Record<string, string>;
};

type Manifest = {
  collections: ManifestCollection[];
  styles: Record<string, StyleEntry>;
};

const HERO_IMAGE_FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1440" height="810" viewBox="0 0 1440 810"%3E%3Crect width="1440" height="810" fill="%231f1f1f"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23f6f2eb" font-family="Georgia, serif" font-size="42"%3EMuseoMorph Gallery%3C/text%3E%3C/svg%3E';

// Context for favorites
type FavoritesContextType = {
  favorites: Set<string>;
  toggleFavorite: (styleId: string) => void;
  isFavorite: (styleId: string) => boolean;
};
const FavoritesContext = createContext<FavoritesContextType | null>(null);

function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext must be used within FavoritesContext.Provider');
  }
  return context;
}

// Context for recent styles
type RecentStylesContextType = {
  recentStyles: RecentStyleEntry[];
  addRecentStyle: (entry: Omit<RecentStyleEntry, 'timestamp'>) => void;
};
const RecentStylesContext = createContext<RecentStylesContextType | null>(null);

function useRecentStylesContext() {
  const context = useContext(RecentStylesContext);
  if (!context) {
    throw new Error('useRecentStylesContext must be used within RecentStylesContext.Provider');
  }
  return context;
}

const HERO_IMAGE_FILES = ['hero_1.png', 'hero_2.png', 'hero_3.png', 'hero_4.png', 'hero_5.png'];

const DEFAULT_RATIO_CANVAS_MAX = 1024;

function parseRatioDimensions(ratio: string): { width: number; height: number } {
  const match = ratio.trim().match(/^(\d+)\s*:\s*(\d+)$/);
  if (!match) {
    return { width: 1, height: 1 };
  }
  const width = Number(match[1]) || 1;
  const height = Number(match[2]) || 1;
  return { width, height };
}

function computePixelDimensions(ratio: string, maxDimension = DEFAULT_RATIO_CANVAS_MAX): { width: number; height: number } {
  const { width: ratioWidth, height: ratioHeight } = parseRatioDimensions(ratio);
  if (ratioWidth <= 0 || ratioHeight <= 0) {
    return { width: maxDimension, height: maxDimension };
  }

  if (ratioWidth >= ratioHeight) {
    const width = maxDimension;
    const height = Math.max(1, Math.round((maxDimension / ratioWidth) * ratioHeight));
    return { width, height };
  }
  const height = maxDimension;
  const width = Math.max(1, Math.round((maxDimension / ratioHeight) * ratioWidth));
  return { width, height };
}

async function createBlankCanvasDataUrl(width: number, height: number): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (context) {
    context.clearRect(0, 0, width, height);
  }
  return canvas.toDataURL('image/png');
}

async function normalizeImageToCanvas(file: File, width: number, height: number): Promise<File> {
  if (!width || !height) {
    return file;
  }

  const imageUrl = URL.createObjectURL(file);
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (event) => reject(event);
      img.src = imageUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) {
      return file;
    }
    context.clearRect(0, 0, width, height);

    const scale = Math.max(width / image.width, height / image.height);
    const drawWidth = Math.max(1, Math.round(image.width * scale));
    const drawHeight = Math.max(1, Math.round(image.height * scale));
    const dx = Math.round((width - drawWidth) / 2);
    const dy = Math.round((height - drawHeight) / 2);

    context.drawImage(image, dx, dy, drawWidth, drawHeight);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) {
      return file;
    }

    const baseName = file.name.replace(/\.[^.]+$/, '');
    const normalizedName = `${baseName || 'upload'}_normalized.png`;
    return new File([blob], normalizedName, { type: 'image/png' });
  } finally {
    URL.revokeObjectURL(imageUrl);
  }
}

function dataUrlToBase64(dataUrl: string): string {
  const parts = dataUrl.split(',');
  return parts[1] ?? '';
}

type MuseoRoute =
  | { type: 'home' }
  | { type: 'collection'; id: string }
  | { type: 'style'; id: string };

type MarkdownSection = {
  key: string;
  title: string;
  body: string;
};

const BASE_PATH = import.meta.env.BASE_URL ?? '/';
const MANIFEST_URL = resolveWithBase('manifest.json');

function resolveWithBase(relPath: string) {
  const base = BASE_PATH.endsWith('/') ? BASE_PATH : `${BASE_PATH}/`;
  const cleaned = relPath.replace(/^\/+/, '');
  return `${base}${cleaned}`;
}

function toRelativePath(path: string) {
  const normalizedBase = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  if (!normalizedBase || normalizedBase === '') return path || '/';
  if (normalizedBase === '/') return path || '/';
  if (path.startsWith(normalizedBase)) {
    const trimmed = path.slice(normalizedBase.length);
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  return path || '/';
}

function parseRoute(pathname: string): MuseoRoute {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.replace(/\/+$/g, '').split('/').filter(Boolean);
  if (segments.length === 0) {
    return { type: 'home' };
  }
  if (segments[0] === 'collections' && segments[1]) {
    return { type: 'collection', id: decodeURIComponent(segments[1]) };
  }
  if (segments[0] === 'styles' && segments[1]) {
    return { type: 'style', id: decodeURIComponent(segments[1]) };
  }
  return { type: 'home' };
}

function useMuseoRoute() {
  const [route, setRoute] = useState<MuseoRoute>(() => parseRoute(toRelativePath(window.location.pathname)));

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute(toRelativePath(window.location.pathname)));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    const target = to.startsWith('/') ? to : `/${to}`;
    const base = BASE_PATH === '/' ? '' : BASE_PATH;
    window.history.pushState({}, '', `${base}${target}`);
    setRoute(parseRoute(target));
  };

  return { route, navigate };
}

function useManifest() {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(MANIFEST_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load manifest (${response.status})`);
        }
        return response.json();
      })
      .then((data: Manifest) => {
        if (mounted) setManifest(data);
      })
      .catch((err: Error) => {
        if (mounted) setError(err.message);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return { manifest, error, loading: !manifest && !error };
}

export default function App() {
  const { manifest, error, loading } = useManifest();
  const { route, navigate } = useMuseoRoute();
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [styleImporterModalOpen, setStyleImporterModalOpen] = useState(false);
  const [apiKeyLoaded, setApiKeyLoaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('museomorph-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    // Default to dark for gallery aesthetic, unless user explicitly prefers light
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Favorites and recent styles hooks
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { recentStyles, addRecentStyle } = useRecentStyles();

  useEffect(() => {
    loadNanoBananaApiKey()
      .then((key) => setApiKey(key))
      .finally(() => setApiKeyLoaded(true));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('museomorph-theme', theme);
  }, [theme]);

  const content = useMemo(() => {
    if (loading) {
      return <LoadingState />;
    }
    if (error || !manifest) {
      return <ErrorState message={error ?? 'Manifest unavailable'} />;
    }

    switch (route.type) {
      case 'home':
        return <HomeView manifest={manifest} onNavigate={navigate} />;
      case 'collection':
        return <CollectionView manifest={manifest} collectionId={route.id} onNavigate={navigate} />;
      case 'style':
        return (
          <StyleView
            manifest={manifest}
            styleId={route.id}
            onNavigate={navigate}
            apiKey={apiKey}
            apiKeyLoaded={apiKeyLoaded}
            onRequestApiKeyModal={() => setApiKeyModalOpen(true)}
          />
        );
      default:
        return null;
    }
  }, [apiKey, apiKeyLoaded, error, loading, manifest, navigate, route]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      <RecentStylesContext.Provider value={{ recentStyles, addRecentStyle }}>
        <div className="app-shell">
          <MuseumNav
            onNavigate={navigate}
            theme={theme}
            onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            onRequestApiKeyModal={() => setApiKeyModalOpen(true)}
            hasApiKey={Boolean(apiKey)}
            apiKeyLoaded={apiKeyLoaded}
            onRequestStyleImporterModal={() => setStyleImporterModalOpen(true)}
          />
          <main className="app-main" role="main">
            {content}
          </main>
          <MuseumFooter />
          <ApiKeyModal
            open={apiKeyModalOpen}
            onClose={() => setApiKeyModalOpen(false)}
            onKeySaved={(key) => setApiKey(key)}
          />
          <StyleImporterModal
            open={styleImporterModalOpen}
            onClose={() => setStyleImporterModalOpen(false)}
          />
        </div>
      </RecentStylesContext.Provider>
    </FavoritesContext.Provider>
  );
}

function MuseumNav({
  onNavigate,
  theme,
  onToggleTheme,
  onRequestApiKeyModal,
  hasApiKey,
  apiKeyLoaded,
  onRequestStyleImporterModal,
}: {
  onNavigate: (to: string) => void;
  theme: string;
  onToggleTheme: () => void;
  onRequestApiKeyModal: () => void;
  hasApiKey: boolean;
  apiKeyLoaded: boolean;
  onRequestStyleImporterModal: () => void;
}) {
  return (
    <header className="museum-nav">
      <div
        className="nav-brand"
        role="button"
        tabIndex={0}
        onClick={() => onNavigate('/')}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter' || evt.key === ' ') {
            evt.preventDefault();
            onNavigate('/');
          }
        }}
      >
        <span className="brand-mark">MuseoMorph</span>
        <span className="brand-sub">AI Art Interpretation Lab</span>
      </div>
      <nav aria-label="Primary" className="nav-links">
        <button type="button" onClick={() => onNavigate('/')}>Gallery</button>
      </nav>
      <button
        type="button"
        className="nav-secondary"
        onClick={onRequestStyleImporterModal}
        disabled={!apiKeyLoaded}
      >
        Import Styles
      </button>
      <button
        type="button"
        className="nav-secondary"
        onClick={onRequestApiKeyModal}
        disabled={!apiKeyLoaded}
      >
        {hasApiKey ? 'Update API key' : 'Add API key'}
      </button>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span aria-hidden="true" className="theme-toggle__icon">
          {theme === 'dark' ? '☾' : '☀'}
        </span>
        <span className="theme-toggle__label">{theme === 'dark' ? 'Night' : 'Day'}</span>
      </button>
      <button
        type="button"
        className="nav-cta"
        onClick={() => {
          onNavigate('/');
          requestAnimationFrame(() => {
            document.getElementById('collections-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }}
      >
        Browse Styles
      </button>
    </header>
  );
}

function MuseumFooter() {
  return (
    <footer className="museum-footer">
      <div>
        <strong>MuseoMorph</strong> — local-first, curated prompt frameworks.
      </div>
      <div className="footer-meta">API keys stay on-device · CID: validate:styles · Manifest driven</div>
    </footer>
  );
}

function LoadingState() {
  return (
    <section className="loading-state" aria-busy="true">
      <div className="spinner" aria-hidden="true" />
      <p>Preparing the gallery…</p>
    </section>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <section className="error-state" role="alert">
      <h2>Manifest unavailable</h2>
      <p>{message}</p>
      <p className="error-hint">Run <code>pnpm run build:manifest</code> to regenerate the index.</p>
    </section>
  );
}

function HomeView({ manifest, onNavigate }: { manifest: Manifest; onNavigate: (to: string) => void }) {
  const totalStyles = manifest.collections.reduce((acc, collection) => acc + collection.styles.length, 0);
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const { recentStyles } = useRecentStylesContext();
  const { favorites } = useFavoritesContext();

  const heroSlides = useMemo(() => {
    return HERO_IMAGE_FILES.map((file) => resolveWithBase(`hero/${file}`));
  }, []);

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [] as StyleEntry[];
    return Object.values(manifest.styles).filter((style) => {
      const haystack = [
        style.display_name,
        style.group,
        style.artist ?? '',
        style.movement ?? '',
        style.about ?? '',
        // Include ratios in search
        ...style.ratios,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [manifest.styles, normalizedQuery]);

  // Get favorite styles as StyleEntry objects
  const favoriteStyles = useMemo(() => {
    return Array.from(favorites)
      .map((id) => manifest.styles[id])
      .filter((style): style is StyleEntry => Boolean(style));
  }, [favorites, manifest.styles]);

  // Get recent styles as StyleEntry objects
  const recentStyleEntries = useMemo(() => {
    return recentStyles
      .map((recent) => manifest.styles[recent.id])
      .filter((style): style is StyleEntry => Boolean(style));
  }, [recentStyles, manifest.styles]);

  return (
    <Fragment>
      <Hero onNavigate={onNavigate} styleCount={totalStyles} slides={heroSlides} />
      <section className="search-panel" aria-labelledby="search-heading">
        <div>
          <h2 id="search-heading">Search the gallery</h2>
          <p>Type an artist, movement, ratio, or keyword to surface matching styles instantly.</p>
        </div>
        <div className="search-input">
          <span aria-hidden="true">🔍</span>
          <input
            type="search"
            value={query}
            placeholder="Search by artist, movement, ratio, or description"
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search styles"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
      </section>

      {normalizedQuery && (
        <section className="search-results" aria-live="polite">
          <header>
            <h2>Search results</h2>
            <p>
              {searchResults.length === 0
                ? 'No styles matched your query. Try a different name or movement.'
                : `${searchResults.length} style${searchResults.length === 1 ? '' : 's'} mentioning "${query.trim()}".`}
            </p>
          </header>
          {searchResults.length > 0 && (
            <div className="style-grid">
              {searchResults.map((style) => (
                <StyleCard key={style.id} style={style} onNavigate={onNavigate} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Favorites Section */}
      {favoriteStyles.length > 0 && (
        <section className="favorites-section" aria-labelledby="favorites-heading">
          <div className="gallery-heading">
            <h2 id="favorites-heading">
              <span className="favorites-star" aria-hidden="true">★</span>
              {' '}Your Favorites
            </h2>
            <p>{favoriteStyles.length} style{favoriteStyles.length === 1 ? '' : 's'} you've saved for quick access.</p>
          </div>
          <div className="horizontal-scroll-container">
            <div className="horizontal-scroll">
              {favoriteStyles.map((style) => (
                <StyleCard key={style.id} style={style} onNavigate={onNavigate} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Styles Section */}
      {recentStyleEntries.length > 0 && (
        <section className="recent-styles-section" aria-labelledby="recent-heading">
          <div className="gallery-heading">
            <h2 id="recent-heading">Recently Viewed</h2>
            <p>Pick up where you left off.</p>
          </div>
          <div className="horizontal-scroll-container">
            <div className="horizontal-scroll">
              {recentStyleEntries.map((style) => (
                <StyleCard key={style.id} style={style} onNavigate={onNavigate} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="collection-gallery" aria-labelledby="collections-heading">
        <div className="gallery-heading">
          <h2 id="collections-heading">Curated Collections</h2>
          <p>Every style interprets a single artist or tightly-scoped movement. Browse by gallery wing.</p>
        </div>
        <div className="collection-grid">
          {manifest.collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              manifest={manifest}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

function Hero({
  onNavigate,
  styleCount,
  slides,
}: {
  onNavigate: (to: string) => void;
  styleCount: number;
  slides: string[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="museum-hero hero-immersive">
      <div className="hero-visual" aria-hidden="true">
        {slides.length === 0 ? (
          <img src={HERO_IMAGE_FALLBACK} alt="MuseoMorph gallery" />
        ) : (
          slides.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Museum highlight"
              className={`hero-slide${index === current ? ' is-active' : ''}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))
        )}
        <div className="hero-visual__overlay" />
        <div className="hero-visual__vignette" />
      </div>
      <div className="hero-copy">
        <p className="hero-eyebrow">AI Art Interpretation Lab</p>
        <h1>Transform portraits into museum-worthy masterpieces.</h1>
        <p>
          Every style captures an artist's authentic fingerprint—no generic filters, no flattened history.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="primary"
            onClick={() => {
              onNavigate('/');
              requestAnimationFrame(() => {
                document.getElementById('collections-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              });
            }}
          >
            Explore the gallery
          </button>
        </div>
      </div>
      <div className="hero-meta" aria-hidden="true">
        <div className="hero-meta__badge">{styleCount} curated styles</div>
      </div>
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}

function CollectionCard({
  collection,
  manifest,
  onNavigate,
}: {
  collection: ManifestCollection;
  manifest: Manifest;
  onNavigate: (to: string) => void;
}) {
  const total = collection.styles.length;
  const imageSlug = collection.id.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  const imageSrc = resolveWithBase(`collection/${imageSlug}.png`);
  const [artSrc, setArtSrc] = useState<string>(imageSrc);

  return (
    <article
      className="collection-card"
      tabIndex={0}
      role="button"
      onClick={() => onNavigate(`/collections/${encodeURIComponent(collection.id)}`)}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter' || evt.key === ' ') {
          evt.preventDefault();
          onNavigate(`/collections/${encodeURIComponent(collection.id)}`);
        }
      }}
    >
      <div className="collection-card__art">
        <img
          src={artSrc}
          alt={`${collection.id} highlight artwork`}
          onError={() => setArtSrc(HERO_IMAGE_FALLBACK)}
          loading="lazy"
        />
        <div className="collection-card__overlay">
          <h3>{collection.id}</h3>
          <span>{total} style{total === 1 ? '' : 's'}</span>
        </div>
      </div>
      <span className="collection-card__cta" aria-hidden="true">View gallery →</span>
    </article>
  );
}

function CollectionView({
  manifest,
  collectionId,
  onNavigate,
}: {
  manifest: Manifest;
  collectionId: string;
  onNavigate: (to: string) => void;
}) {
  if (collectionId.toLowerCase() === 'all') {
    const styles = Object.values(manifest.styles);
    return (
      <section className="collection-detail">
        <button type="button" className="backlink" onClick={() => onNavigate('/')}>← Back to all collections</button>
        <header>
          <h2>All Styles</h2>
          <p>{styles.length} styles indexed across every collection.</p>
        </header>
        <div className="style-grid">
          {styles.map((style) => (
            <StyleCard key={style.id} style={style} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    );
  }

  const collection = manifest.collections.find((item) => item.id.toLowerCase() === collectionId.toLowerCase());

  if (!collection) {
    return (
      <section className="not-found">
        <h2>Collection not found</h2>
        <p>We couldn’t find a gallery named “{collectionId}”.</p>
        <button type="button" onClick={() => onNavigate('/')}>Return to collections</button>
      </section>
    );
  }

  const styles = collection.styles
    .map((id) => manifest.styles[id])
    .filter((style): style is StyleEntry => Boolean(style));

  return (
    <section className="collection-detail">
      <button type="button" className="backlink" onClick={() => onNavigate('/')}>← Back to all collections</button>
      <header>
        <h2>{collection.id}</h2>
        <p>{styles.length} style{styles.length === 1 ? '' : 's'} curated under this wing.</p>
      </header>
      <div className="style-grid">
        {styles.map((style) => (
          <StyleCard key={style.id} style={style} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  );
}

function StyleCard({
  style,
  onNavigate,
  compact = false
}: {
  style: StyleEntry;
  onNavigate: (to: string) => void;
  compact?: boolean;
}) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const favorite = isFavorite(style.id);

  const handleFavoriteClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    toggleFavorite(style.id);
  };

  const handleFavoriteKeyDown = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.stopPropagation();
      evt.preventDefault();
      toggleFavorite(style.id);
    }
  };

  return (
    <article
      className={`style-card${compact ? ' style-card--compact' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => onNavigate(`/styles/${encodeURIComponent(style.id)}`)}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter' || evt.key === ' ') {
          evt.preventDefault();
          onNavigate(`/styles/${encodeURIComponent(style.id)}`);
        }
      }}
    >
      <button
        type="button"
        className={`style-card__favorite${favorite ? ' style-card__favorite--active' : ''}`}
        onClick={handleFavoriteClick}
        onKeyDown={handleFavoriteKeyDown}
        aria-label={favorite ? `Remove ${style.display_name} from favorites` : `Add ${style.display_name} to favorites`}
        aria-pressed={favorite}
      >
        {favorite ? '★' : '☆'}
      </button>
      <div className="style-card__header">
        <h3>{style.display_name}</h3>
        <span className="style-group">{style.group}</span>
      </div>
      {!compact && style.about && <p className="style-about">{style.about}</p>}
      {!compact && (
        <div className="style-meta">
          <div>
            <span className="meta-label">Ratios</span>
            <div className="meta-chips">
              {style.ratios.slice(0, 3).map((ratio) => (
                <span key={ratio} className="chip">{ratio}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="meta-label">Modes</span>
            <div className="meta-chips">
              {style.modes.map((mode) => (
                <span key={mode} className="chip chip--subtle">{mode}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      {compact && (
        <div className="style-card__compact-meta">
          {style.artist && <span className="style-artist">{style.artist}</span>}
        </div>
      )}
      <span className="style-link" aria-hidden="true">View style →</span>
    </article>
  );
}

function StyleView({
  manifest,
  styleId,
  onNavigate,
  apiKey,
  apiKeyLoaded,
  onRequestApiKeyModal,
}: {
  manifest: Manifest;
  styleId: string;
  onNavigate: (to: string) => void;
  apiKey: string | null;
  apiKeyLoaded: boolean;
  onRequestApiKeyModal: () => void;
}) {
  const style = manifest.styles[styleId];
  const { addRecentStyle } = useRecentStylesContext();
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const [sections, setSections] = useState<MarkdownSection[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploads, setUploads] = useState<File[]>([]);
  const [selectedRatio, setSelectedRatio] = useState<string>('');
  const [selectedMode, setSelectedMode] = useState<string>('');
  const [creativeAddOn, setCreativeAddOn] = useState('');
  const [parsedMarkdown, setParsedMarkdown] = useState<ParsedStyleMarkdown | null>(null);

  // Add to recent styles when viewing
  useEffect(() => {
    if (style) {
      addRecentStyle({
        id: style.id,
        displayName: style.display_name,
        group: style.group,
      });
    }
  }, [style, addRecentStyle]);

  useEffect(() => {
    if (!style) return;
    setLoading(true);
    setError(null);
    setSections(null);
    setUploads([]);
    setSelectedRatio(style.ratios[0] ?? '');
    setSelectedMode(style.modes[0] ?? '');
    setCreativeAddOn('');
    setParsedMarkdown(null);

    const styleUrl = resolveWithBase(style.file);
    fetch(styleUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load markdown (${response.status})`);
        }
        return response.text();
      })
      .then((text) => {
        setSections(parseMarkdownSections(text));
        try {
          setParsedMarkdown(parsePromptMarkdown(text));
        } catch (err) {
          console.error('Failed to parse style markdown', err);
          setParsedMarkdown({
            frontmatter: {},
            preface: undefined,
            rendererAdapter: undefined,
            sections: {},
          });
        }
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [style]);

  if (!style) {
    return (
      <section className="not-found">
        <h2>Style not found</h2>
        <p>We couldn’t find a style with ID “{styleId}”.</p>
        <button type="button" onClick={() => onNavigate('/')}>Return to collections</button>
      </section>
    );
  }

  return (
    <article className="style-detail">
      <button type="button" className="backlink" onClick={() => onNavigate(`/collections/${encodeURIComponent(style.group)}`)}>
        ← Back to {style.group}
      </button>

      <header className="style-detail__header">
        <div className="style-hero">
          <figure className="style-hero__image">
            <img
              src={style.hero_image ?? HERO_IMAGE_FALLBACK}
              alt={style.display_name}
              loading="lazy"
            />
          </figure>
          <div className="style-hero__copy">
            <p className="style-eyebrow">{style.group}</p>
            <div className="style-hero__title-row">
              <h1>{style.display_name}</h1>
              <button
                type="button"
                className={`style-detail__favorite${isFavorite(style.id) ? ' style-detail__favorite--active' : ''}`}
                onClick={() => toggleFavorite(style.id)}
                aria-label={isFavorite(style.id) ? 'Remove from favorites' : 'Add to favorites'}
                aria-pressed={isFavorite(style.id)}
              >
                {isFavorite(style.id) ? '★ Favorited' : '☆ Add to favorites'}
              </button>
            </div>
            <StyleMetaSummary style={style} />
            {style.about && <p className="style-detail__about">{style.about}</p>}
            <div className="style-infobar">
              <div>
                <span className="style-infobar__label">Ratios</span>
                <strong>{style.ratios.length}</strong>
              </div>
              <div>
                <span className="style-infobar__label">Modes</span>
                <strong>{style.modes.length}</strong>
              </div>
              <div>
                <span className="style-infobar__label">Subjects</span>
                <strong>{style.multi_subject?.allowed ? `Up to ${style.multi_subject?.max_subjects ?? 3}` : 'Single'}</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <StyleComposer
        style={style}
        uploads={uploads}
        setUploads={setUploads}
        selectedRatio={selectedRatio}
        onRatioChange={setSelectedRatio}
        selectedMode={selectedMode}
        onModeChange={setSelectedMode}
        creativeAddOn={creativeAddOn}
        onCreativeChange={setCreativeAddOn}
        coreInstruction={sections?.find((section) => section.title.includes('Core Instruction'))?.body ?? ''}
        apiKey={apiKey}
        apiKeyLoaded={apiKeyLoaded}
        onRequestApiKeyModal={onRequestApiKeyModal}
        parsedMarkdown={parsedMarkdown}
      />

      <section className="style-pillars">
        <dl>
          <div>
            <dt>Ratios</dt>
            <dd>{style.ratios.join(' · ')}</dd>
          </div>
          <div>
            <dt>Modes</dt>
            <dd>{style.modes.join(' · ')}</dd>
          </div>
          <div>
            <dt>Safety profile</dt>
            <dd>{style.safety_profile.join(', ')}</dd>
          </div>
          {style.multi_subject && (
            <div>
              <dt>Multi-subject</dt>
              <dd>
                {style.multi_subject.allowed ? 'Allowed' : 'Single subject only'}
                {style.multi_subject.allowed && style.multi_subject.max_subjects && ` · up to ${style.multi_subject.max_subjects}`}
                {style.multi_subject.allowed && style.multi_subject.layout_hint && (
                  <span className="subnote">Layout: {style.multi_subject.layout_hint}</span>
                )}
              </dd>
            </div>
          )}
        </dl>
      </section>

      {loading && <p className="detail-loading">Loading framework…</p>}
      {error && (
        <p className="detail-error" role="alert">
          Unable to load style markdown: {error}
        </p>
      )}

      {sections && (
      <CuratorNotes sections={sections} />
    )}
  </article>
);
}

function RatioTileGroup({
  ratios,
  selectedRatio,
  onChange,
}: {
  ratios: string[];
  selectedRatio: string;
  onChange: (ratio: string) => void;
}) {
  return (
    <div className="ratio-grid">
      {ratios.map((ratio) => {
        const meta = describeRatio(ratio);
        const active = selectedRatio === ratio;
        return (
          <button
            key={ratio}
            type="button"
            className={`ratio-tile${active ? ' ratio-tile--active' : ''}`}
            onClick={() => onChange(ratio)}
            aria-pressed={active}
          >
            <span className="ratio-tile__ratio">{ratio}</span>
            <span className="ratio-tile__meta">{meta.orientation}</span>
            {meta.resolution && <span className="ratio-tile__resolution">{meta.resolution}</span>}
          </button>
        );
      })}
    </div>
  );
}

function ModePills({
  modes,
  selectedMode,
  onChange,
}: {
  modes: string[];
  selectedMode: string;
  onChange: (mode: string) => void;
}) {
  return (
    <div className="mode-pills">
      {modes.map((mode) => {
        const active = selectedMode === mode;
        return (
          <button
            key={mode}
            type="button"
            className={`mode-pill${active ? ' mode-pill--active' : ''}`}
            onClick={() => onChange(mode)}
            aria-pressed={active}
          >
            {mode}
          </button>
        );
      })}
    </div>
  );
}

function describeRatio(ratio: string): { orientation: string; resolution?: string } {
  try {
    const decision = chooseNanoBananaRatio(ratio);
    const orientation =
      decision.orientation === 'portrait'
        ? 'Portrait'
        : decision.orientation === 'landscape'
        ? 'Landscape'
        : 'Square';
    const resolution = `${decision.resolution[0]}×${decision.resolution[1]}`;
    return { orientation, resolution };
  } catch {
    return { orientation: 'Custom' };
  }
}

function makeUploadKey(file: File, index: number) {
  return `${file.name}-${file.size}-${file.lastModified}-${index}`;
}

function formatFileSize(size: number) {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }
  if (size >= 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }
  return `${size} B`;
}
function StyleMetaSummary({ style }: { style: StyleEntry }) {
  if (!style.artist && !style.movement) return null;
  return (
    <p className="style-detail__meta">
      {style.artist && <span>{style.artist}</span>}
      {style.artist && style.movement && <span aria-hidden="true"> · </span>}
      {style.movement && <span>{style.movement}</span>}
    </p>
  );
}

function parseMarkdownSections(markdown: string): MarkdownSection[] {
  const content = markdown.replace(/^---[\s\S]*?---/m, '').trim();
  const sections: MarkdownSection[] = [];
  const headingRegex = /^##\s+(.*)$/gm;
  let match: RegExpExecArray | null;
  let lastIndex = 0;
  let current: MarkdownSection | null = null;

  while ((match = headingRegex.exec(content)) !== null) {
    const headingText = match[1].trim();
    if (current) {
      current.body = content.slice(lastIndex, match.index).trim();
    }
    const key = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    current = { key, title: headingText, body: '' };
    sections.push(current);
    lastIndex = headingRegex.lastIndex;
  }

  if (current) {
    current.body = content.slice(lastIndex).trim();
  } else if (content) {
    sections.push({ key: 'content', title: 'Content', body: content });
  }

  return sections.filter((section) => section.body.length > 0);
}

function summarizeSection(section?: MarkdownSection): string | null {
  if (!section) return null;

  const stripped = section.body
    .replace(/^#{1,6}\s.*$/gm, '')
    .replace(/^[-*]\s+/gm, '')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/>\s*/g, '')
    .trim();

  const paragraphs = stripped
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return null;

  const summary = paragraphs.slice(0, 2).join(' ');
  return summary.length > 420 ? `${summary.slice(0, 417).trimEnd()}…` : summary;
}

function CuratorNotes({ sections }: { sections: MarkdownSection[] }) {
  const contextSection = sections.find((section) =>
    /style context|photographic style|illustration style/i.test(section.title),
  );
  const technicalSection = sections.find((section) => /technical/i.test(section.title));

  const contextSummary = summarizeSection(contextSection);
  const techniqueSummary = summarizeSection(technicalSection);

  if (!contextSummary && !techniqueSummary) return null;

  return (
    <section className="curator-notes">
      <h2 className="curator-notes__title">Curator notes</h2>
      {contextSummary && (
        <p className="curator-notes__item">
          <span className="curator-notes__label">Context</span>
          {contextSummary}
        </p>
      )}
      {techniqueSummary && (
        <p className="curator-notes__item">
          <span className="curator-notes__label">Technique</span>
          {techniqueSummary}
        </p>
      )}
    </section>
  );
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Failed to read file as base64.'));
        return;
      }
      const base64 = result.includes(',') ? result.split(',')[1] ?? '' : result;
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error ?? new Error('Unknown file reader error.'));
    reader.readAsDataURL(file);
  });
}

function StyleComposer({
  style,
  uploads,
  setUploads,
  selectedRatio,
  onRatioChange,
  selectedMode,
  onModeChange,
  creativeAddOn,
  onCreativeChange,
  coreInstruction,
  apiKey,
  apiKeyLoaded,
  onRequestApiKeyModal,
  parsedMarkdown,
}: {
  style: StyleEntry;
  uploads: File[];
  setUploads: Dispatch<SetStateAction<File[]>>;
  selectedRatio: string;
  onRatioChange: (ratio: string) => void;
  selectedMode: string;
  onModeChange: (mode: string) => void;
  creativeAddOn: string;
  onCreativeChange: (value: string) => void;
  coreInstruction: string;
  apiKey: string | null;
  apiKeyLoaded: boolean;
  onRequestApiKeyModal: () => void;
  parsedMarkdown: ParsedStyleMarkdown | null;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [resultMimeType, setResultMimeType] = useState<string | null>(null);
  const [isResultPreviewOpen, setIsResultPreviewOpen] = useState(false);
  const [ratioDecisionState, setRatioDecisionState] = useState<RatioDecision | null>(null);
  const [tokenCost, setTokenCost] = useState<number | null>(null);
  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});

  const activeRatioDecision = useMemo(() => {
    const fallback = style.ratios[0] ?? '1:1';
    const ratio = selectedRatio || fallback;
    try {
      return chooseNanoBananaRatio(ratio);
    } catch (error) {
      console.warn('Failed to reconcile ratio', error);
      return null;
    }
  }, [selectedRatio, style.ratios]);

  useEffect(() => {
    if (uploads.length === 0) {
      setPreviewUrls({});
      return;
    }
    const created: string[] = [];
    const next: Record<string, string> = {};
    uploads.forEach((file, index) => {
      const key = makeUploadKey(file, index);
      const objectUrl = URL.createObjectURL(file);
      next[key] = objectUrl;
      created.push(objectUrl);
    });
    setPreviewUrls(next);
    return () => {
      created.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [uploads]);

  const handleFiles = (files: FileList | File[] | null) => {
    if (!files) return;
    const list = Array.isArray(files) ? files : Array.from(files);
    const filtered = list.filter((file) => {
      if (!file.type) {
        return /\.(jpe?g|png|gif|webp|tiff|tif|avif|heic|heif)$/i.test(file.name);
      }
      return file.type.startsWith('image/');
    });
    if (!filtered.length) return;
    setUploads((prev) => [...prev, ...filtered]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFiles(event.dataTransfer?.files ?? null);
  };

  const removeFile = (index: number) => {
    setUploads((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleDownload = useCallback(() => {
    if (!resultImage) return;
    const [, subtype = 'png'] = (resultMimeType ?? 'image/png').split('/');
    const extension = subtype === 'jpeg' ? 'jpg' : subtype;
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = `museomorph-nanobanana.${extension}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [resultImage, resultMimeType]);

  useEffect(() => {
    if (!isResultPreviewOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsResultPreviewOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isResultPreviewOpen]);

  const handleCommission = useCallback(async () => {
    if (!parsedMarkdown) {
      setGenerationError('Style framework is still loading.');
      return;
    }
    if (!activeRatioDecision) {
      setGenerationError('Unable to reconcile the requested ratio with NanoBanana.');
      return;
    }
    if (!apiKeyLoaded) {
      setGenerationError('Checking NanoBanana key…');
      return;
    }
    if (!apiKey) {
      setGenerationError('Add your NanoBanana API key to continue.');
      onRequestApiKeyModal();
      return;
    }
    if (uploads.length === 0) {
      setGenerationError('Upload at least one reference photo.');
      return;
    }

    setIsGenerating(true);
    setGenerationError(null);
    setResultImage(null);
    setResultMimeType(null);
    setIsResultPreviewOpen(false);
    setRatioDecisionState(null);
    setTokenCost(null);

    try {
      const { width: targetWidth, height: targetHeight } = computePixelDimensions(activeRatioDecision.chosen);

      const normalizedUploads = await Promise.all(
        uploads.map(async (file, index) => {
          try {
            const normalized = await normalizeImageToCanvas(file, targetWidth, targetHeight);
            return normalized;
          } catch (error) {
            console.warn('Failed to normalize upload', { file: file.name, error });
            return file;
          }
        }),
      );

      const ratioTemplateBase64 = await (async () => {
        try {
          const templateDataUrl = await createBlankCanvasDataUrl(targetWidth, targetHeight);
          return dataUrlToBase64(templateDataUrl);
        } catch (error) {
          console.warn('Failed to create ratio template', error);
          return null;
        }
      })();

      const uploadPayloads = await Promise.all(
        normalizedUploads.map(async (file, index) => ({
          name: file.name || `upload-${index + 1}.png`,
          mimeType: file.type || 'image/png',
          dataBase64: await fileToBase64(file),
        })),
      );

      const userDirectives = creativeAddOn
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);

      const promptResult = buildPrompt({
        style: style as PromptManifestStyle,
        markdown: parsedMarkdown,
        ratio: activeRatioDecision.chosen,
        mode: selectedMode || undefined,
        subjectCount: Math.max(uploads.length, 1),
        userDirectives,
        additionalContext: coreInstruction || undefined,
      });

      const response = await generateArtwork({
        prompt: promptResult.prompt,
        ratio: activeRatioDecision.chosen,
        ratioDecision: activeRatioDecision,
        mode: selectedMode || undefined,
        subjectCount: Math.max(uploads.length, 1),
        userDirectives,
        uploads: uploadPayloads,
        ratioTemplate: ratioTemplateBase64
          ? {
              name: `ratio-template-${targetWidth}x${targetHeight}.png`,
              mimeType: 'image/png',
              dataBase64: ratioTemplateBase64,
            }
          : undefined,
        imageSize: '2K', // NanoBanana Pro: 1K, 2K, or 4K
      });

      const dataUrl = `data:${response.mimeType};base64,${response.imageBase64}`;
      setResultImage(dataUrl);
      setResultMimeType(response.mimeType);
      setRatioDecisionState(activeRatioDecision);
      setTokenCost(response.tokenCost);
      console.info('NanoBanana ratio decision', {
        requested: activeRatioDecision.requested,
        chosen: activeRatioDecision.chosen,
        reason: activeRatioDecision.reason,
      });
    } catch (error) {
      setGenerationError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsGenerating(false);
    }
  }, [
    activeRatioDecision,
    apiKey,
    apiKeyLoaded,
    coreInstruction,
    creativeAddOn,
    onRequestApiKeyModal,
    parsedMarkdown,
    selectedMode,
    style,
    uploads,
  ]);

  return (
    <section className="composer-panel">
      <div className="composer-intro">
        <h2>Curator’s Panel</h2>
        {style.about && <p>{style.about}</p>}
        {activeRatioDecision && activeRatioDecision.reason === 'nearest_supported' && (
          <p className="composer-note">
            NanoBanana renders at {activeRatioDecision.chosen} for this request (requested {activeRatioDecision.requested}).
          </p>
        )}
        {apiKeyLoaded && !apiKey && (
          <p className="composer-note warning">Add your NanoBanana API key to enable generation.</p>
        )}
      </div>
      <div className="composer-controls">
        <div
          className="upload-dropzone"
          onDragOver={(event) => {
            event.preventDefault();
            if (event.dataTransfer) {
              event.dataTransfer.dropEffect = 'copy';
            }
          }}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            multiple={style.multi_subject?.allowed ?? true}
            onChange={(event) => handleFiles(event.target.files)}
          />
          <span className="upload-icon" aria-hidden="true">?</span>
          <p>Drag an image here or click to upload</p>
          {style.multi_subject?.allowed && style.multi_subject.max_subjects && (
            <small>Up to {style.multi_subject.max_subjects} subjects recommended.</small>
          )}
        </div>
        {uploads.length > 0 && (
          <div className="upload-preview-grid" aria-label="Uploaded images">
            {uploads.map((file, index) => {
              const key = makeUploadKey(file, index);
              const preview = previewUrls[key];
              return (
                <figure key={key} className="upload-preview-card">
                  {preview ? (
                    <img src={preview} alt={`Reference ${file.name || `upload ${index + 1}`}`} />
                  ) : (
                    <div className="upload-preview-card__placeholder" aria-hidden="true" />
                  )}
                  <figcaption className="upload-preview-card__meta">
                    <span>{file.name || `upload-${index + 1}`}</span>
                    <small>{formatFileSize(file.size)}</small>
                  </figcaption>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    aria-label={`Remove ${file.name || `upload ${index + 1}`}`}
                  >
                    ✕
                  </button>
                </figure>
              );
            })}
          </div>
        )}
      </div>
      <aside className="composer-sidebar">
        <div className="composer-field">
          <span>Preferred ratio</span>
          <RatioTileGroup
            ratios={style.ratios}
            selectedRatio={selectedRatio}
            onChange={onRatioChange}
          />
        </div>
        <div className="composer-field">
          <span>Mode</span>
          <ModePills modes={style.modes} selectedMode={selectedMode} onChange={onModeChange} />
        </div>
        <label className="composer-field">
          <span>Add creative direction (optional)</span>
          <textarea
            value={creativeAddOn}
            onChange={(event) => onCreativeChange(event.target.value)}
            placeholder="e.g., set the hero against a crimson dragon"
            rows={4}
          />
        </label>
        <button
          type="button"
          className="composer-cta"
          onClick={handleCommission}
          disabled={isGenerating || !parsedMarkdown}
        >
          {isGenerating ? 'Commissioning…' : 'Commission artwork'}
        </button>
        {!parsedMarkdown && (
          <p className="composer-note">Style framework is loading…</p>
        )}
        {generationError && <p className="composer-error">{generationError}</p>}
      </aside>
      {resultImage && (
        <div className="composer-result">
          <h3>Generated artwork</h3>
          <button
            type="button"
            className="composer-result__preview"
            onClick={() => setIsResultPreviewOpen(true)}
          >
            <img src={resultImage} alt="" />
            <span className="sr-only">Open full-size preview</span>
          </button>
          <div className="composer-result__actions">
            <button type="button" onClick={() => setIsResultPreviewOpen(true)}>
              View full size
            </button>
            <button type="button" onClick={handleDownload}>
              Download image
            </button>
          </div>
          <dl>
            {ratioDecisionState && (
              <div>
                <dt>Aspect ratio</dt>
                <dd>
                  {ratioDecisionState.chosen}
                  {ratioDecisionState.reason === 'nearest_supported' && ` (requested ${ratioDecisionState.requested})`}
                </dd>
              </div>
            )}
            {typeof tokenCost === 'number' && (
              <div>
                <dt>Token cost</dt>
                <dd>{tokenCost}</dd>
              </div>
            )}
          </dl>
        </div>
      )}
      {isResultPreviewOpen && resultImage && (
        <div
          className="composer-result__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Full-size generated artwork"
          onClick={() => setIsResultPreviewOpen(false)}
        >
          <div
            className="composer-result__modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="composer-result__modal-close"
              onClick={() => setIsResultPreviewOpen(false)}
            >
              Close
            </button>
            <img src={resultImage} alt="NanoBanana generated artwork, full size" />
          </div>
        </div>
      )}
    </section>
  );
}
