import { useEffect, useState } from 'react';
import { clearNanoBananaApiKey, loadNanoBananaApiKey, saveNanoBananaApiKey } from '../lib/nanobanana/apiKey';

interface ApiKeyModalProps {
  open: boolean;
  onClose: () => void;
  onKeySaved?: (key: string | null) => void;
}

export function ApiKeyModal({ open, onClose, onKeySaved }: ApiKeyModalProps) {
  const [apiKey, setApiKey] = useState('');
  const [initialKey, setInitialKey] = useState<string | null>(null);
  const [status, setStatus] = useState<{ message: string; tone: 'info' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setStatus(null);
    setLoading(true);
    loadNanoBananaApiKey()
      .then((existing) => {
        setInitialKey(existing);
        setApiKey(existing ?? '');
      })
      .finally(() => setLoading(false));
  }, [open]);

  if (!open) return null;

  const handleSave = async () => {
    try {
      setStatus(null);
      setLoading(true);
      await saveNanoBananaApiKey(apiKey.trim());
      setInitialKey(apiKey.trim());
      onKeySaved?.(apiKey.trim() || null);
      setStatus({ message: 'API key saved to device keychain.', tone: 'info' });
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : String(error),
        tone: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    try {
      setStatus(null);
      setLoading(true);
      await clearNanoBananaApiKey();
      setInitialKey(null);
      setApiKey('');
      onKeySaved?.(null);
      setStatus({ message: 'API key removed.', tone: 'info' });
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : String(error),
        tone: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <header>
          <h2>Configure NanoBanana API Key</h2>
          <p className="modal-description">
            MuseoMorph stores this key locally using the system keychain. It is never uploaded.
          </p>
        </header>
        <label className="modal-field">
          <span>API key</span>
          <input
            type="text"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
            placeholder="Enter your NanoBanana key"
            autoComplete="off"
            spellCheck={false}
            disabled={loading}
          />
        </label>
        <div className="modal-actions">
          <button type="button" onClick={handleSave} disabled={loading || apiKey.trim().length === 0}>
            Save key
          </button>
          <button type="button" onClick={handleClear} disabled={loading || !initialKey}>
            Remove key
          </button>
          <button type="button" onClick={onClose} disabled={loading}>
            Close
          </button>
        </div>
        {status && (
          <p className={`modal-status${status.tone === 'error' ? ' error' : ''}`}>{status.message}</p>
        )}
      </div>
    </div>
  );
}
