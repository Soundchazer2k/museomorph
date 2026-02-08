import type { RatioDecision, SupportedNanoBananaRatio } from './ratios';
import { isTauriRuntime } from './apiKey';

export interface UploadPayload {
  name: string;
  mimeType: string;
  dataBase64: string;
}

export type ImageSize = '1K' | '2K' | '4K';

export interface GenerateArtworkRequest {
  prompt: string;
  ratio: SupportedNanoBananaRatio;
  ratioDecision: RatioDecision;
  mode?: string;
  subjectCount: number;
  userDirectives: string[];
  uploads: UploadPayload[];
  additionalContext?: string;
  ratioTemplate?: UploadPayload;
  imageSize?: ImageSize; // NanoBanana Pro resolution: 1K, 2K (default), or 4K
}

export interface GenerateArtworkResponse {
  imageBase64: string;
  mimeType: string;
  ratioUsed: SupportedNanoBananaRatio;
  tokenCost: number;
  debug?: Record<string, unknown>;
}

async function ensureTauriInvoke() {
  if (!isTauriRuntime) {
    throw new Error('Image generation is only available in the desktop app.');
  }
  const mod = await import('@tauri-apps/api/core');
  return mod.invoke;
}

export async function generateArtwork(
  request: GenerateArtworkRequest,
): Promise<GenerateArtworkResponse> {
  const invoke = await ensureTauriInvoke();
  const response = await invoke<GenerateArtworkResponse>('generate_nanobanana_image', { request });
  return response;
}
