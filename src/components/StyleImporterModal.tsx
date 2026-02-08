import { useEffect, useState } from 'react';
import { isTauriRuntime } from '../lib/nanobanana/apiKey';

async function tauriInvoke<T>(command: string, args?: Record<string, unknown>): Promise<T> {
  const { invoke } = await import('@tauri-apps/api/core');
  return invoke<T>(command, args);
}

interface StyleValidationResult {
  file_path: string;
  valid: boolean;
  errors: string[];
}

interface StyleDestination {
  file_path: string;
  destination: string;
}

interface StyleImporterModalProps {
  open: boolean;
  onClose: () => void;
}

export function StyleImporterModal({ open, onClose }: StyleImporterModalProps) {
  const [status, setStatus] = useState<{ message: string; tone: 'info' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);
  const [validationResults, setValidationResults] = useState<StyleValidationResult[]>([]);
  const [styleFolders, setStyleFolders] = useState<string[]>([]);
  const [styleDestinations, setStyleDestinations] = useState<StyleDestination[]>([]);

  useEffect(() => {
    if (!open) return;
    setStatus(null);
    setLoading(false);
    setValidationResults([]);
    setStyleDestinations([]);
    if (!isTauriRuntime) {
      setStatus({ message: 'Style importing is available only in the desktop app.', tone: 'error' });
      return;
    }
    let cancelled = false;
    tauriInvoke<string[]>('get_style_folders')
      .then((folders) => {
        if (!cancelled) {
          setStyleFolders(folders);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setStatus({
            message: error instanceof Error ? error.message : String(error),
            tone: 'error',
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [open]);

  if (!open) return null;

  const handleImport = async () => {
    setLoading(true);
    setStatus(null);
    setValidationResults([]);
    try {
      if (!isTauriRuntime) {
        setStatus({ message: 'Desktop runtime required for importing.', tone: 'error' });
        return;
      }
      const selected = await (window as typeof window & { __TAURI__?: any }).__TAURI__?.dialog?.open?.({
        multiple: true,
        filters: [
          {
            name: 'Markdown',
            extensions: ['md'],
          },
        ],
      });
      if (Array.isArray(selected)) {
        const results = await tauriInvoke<StyleValidationResult[]>('import_styles', { files: selected });
        setValidationResults(results);
      }
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : String(error),
        tone: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveFolder = (file_path: string, destination: string) => {
    setStyleDestinations((prev) => {
      const existing = prev.find((d) => d.file_path === file_path);
      if (existing) {
        return prev.map((d) => (d.file_path === file_path ? { ...d, destination } : d));
      }
      return [...prev, { file_path, destination }];
    });
  };

  const handleSave = async () => {
    setLoading(true);
    setStatus(null);
    try {
      if (!isTauriRuntime) {
        setStatus({ message: 'Desktop runtime required for importing.', tone: 'error' });
        return;
      }
      await tauriInvoke('save_styles', { styles: styleDestinations });
      setStatus({ message: 'Styles saved successfully!', tone: 'info' });
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1000);
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : String(error),
        tone: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const validStyles = validationResults.filter((r) => r.valid);
  const allValidStylesHaveDestination = validStyles.every((r) =>
    styleDestinations.some((d) => d.file_path === r.file_path && d.destination)
  );

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <header>
          <h2>Import New Styles</h2>
          <p className="modal-description">
            Select one or more markdown (.md) files to import as new styles.
          </p>
        </header>
        {validationResults.length > 0 && (
          <div className="validation-results">
            <h3>Validation Results</h3>
            <ul>
              {validationResults.map((result) => (
                <li key={result.file_path}>
                  {result.file_path} - {result.valid ? 'Valid' : 'Invalid'}
                  {result.errors.length > 0 && (
                    <ul>
                      {result.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  )}
                  {result.valid && (
                    <div>
                      <label>
                        Destination Folder:
                        <select
                          onChange={(e) => handleSaveFolder(result.file_path, e.target.value)}
                        >
                          <option value="">Select a folder</option>
                          {styleFolders.map((folder) => (
                            <option key={folder} value={folder}>
                              {folder}
                            </option>
                          ))}
                          <option value="new-folder">Create new folder...</option>
                        </select>
                      </label>
                      {styleDestinations.find(
                        (d) => d.file_path === result.file_path && d.destination === 'new-folder'
                      ) && (
                        <input
                          type="text"
                          placeholder="New folder name"
                          onChange={(e) => handleSaveFolder(result.file_path, `new-folder:${e.target.value}`)}
                        />
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="modal-actions">
          <button type="button" onClick={handleImport} disabled={loading || !isTauriRuntime}>
            {loading ? 'Selecting...' : 'Select Files'}
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={loading || !allValidStylesHaveDestination || !isTauriRuntime}
          >
            Save
          </button>
          <button type="button" onClick={onClose} disabled={loading}>
            Close
          </button>
        </div>
        {status && (
          <p className={`modal-status${status.tone === 'error' ? ' error' : ''}`}>{status.message}</p>
        )}
        {!isTauriRuntime && (
          <p className="modal-status error">Install the MuseoMorph desktop app to import styles.</p>
        )}
      </div>
    </div>
  );
}
