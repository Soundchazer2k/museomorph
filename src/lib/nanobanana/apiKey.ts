const STORAGE_KEY = 'museomorph.nanobanana.api_key';

declare global {
  interface Window {
    __TAURI__?: {
      invoke?: (cmd: string, args?: Record<string, unknown>) => Promise<any>;
      dialog?: {
        open?: (options: Record<string, unknown>) => Promise<string | string[] | null>;
      };
    };
    __TAURI_IPC__?: unknown;
    __TAURI_INTERNALS__?: unknown;
  }
}

export const isTauriRuntime =
  typeof window !== 'undefined' &&
  Boolean(window.__TAURI__?.invoke || window.__TAURI_IPC__ || window.__TAURI_INTERNALS__);

async function loadTauriInvoke() {
  if (!isTauriRuntime) {
    throw new Error('Tauri runtime unavailable');
  }
  if (typeof window !== 'undefined' && typeof window.__TAURI__?.invoke === 'function') {
    return window.__TAURI__.invoke;
  }
  const mod = await import('@tauri-apps/api/core');
  return mod.invoke;
}

export async function saveNanoBananaApiKey(key: string): Promise<void> {
  if (isTauriRuntime) {
    const invoke = await loadTauriInvoke();
    await invoke('store_nanobanana_api_key', { key });
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, key);
}

export async function loadNanoBananaApiKey(): Promise<string | null> {
  if (isTauriRuntime) {
    const invoke = await loadTauriInvoke();
    const response = await invoke<string | null>('load_nanobanana_api_key');
    return response ?? null;
  }
  return window.localStorage.getItem(STORAGE_KEY);
}

export async function clearNanoBananaApiKey(): Promise<void> {
  if (isTauriRuntime) {
    const invoke = await loadTauriInvoke();
    await invoke('clear_nanobanana_api_key');
    return;
  }
  window.localStorage.removeItem(STORAGE_KEY);
}
