# Changelog

All notable changes to MuseoMorph will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2025-02-08

### Added
- **NanoBanana Pro Integration**: Upgraded to Gemini 3 Pro Image (`gemini-3-pro-image-preview`) with native aspect ratio support, 2K/4K resolution options, and support for up to 14 reference images
- **Gallery-Style UI**: Complete redesign with dark theme, atmospheric backgrounds, fixed navigation with blur effect, and immersive hero carousel
- **Style Importer**: Import external `.md` style files with schema validation via drag-drop or file picker
- **Favorites & Recents**: Track favorite styles and recently used styles in localStorage
- **New Collections**: Added `photography/` and `experimental/` style collections
- **Documentation**: Added NanoBanana Pro API docs, format comparison guide, and Universal Museum-Grade Framework references
- **CLAUDE.md**: AI assistant guidance for codebase navigation

### Changed
- Navigation is now fixed with a glassmorphism effect
- Collection cards now show artwork previews
- Prompt builder now supports 8-section style format with mode and ratio awareness
- Updated manifest to 221+ curated styles across 32 collections

### Fixed
- Dark theme styling for ratio tiles and info bar boxes (no longer appear washed out)
- API key modal behavior in web vs desktop contexts
- Border colors now use theme-aware CSS variables
