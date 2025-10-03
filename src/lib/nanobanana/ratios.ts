export const SUPPORTED_ASPECT_RATIOS = {
  '1:1': { resolution: [1024, 1024] as const, tokens: 1290 },
  '2:3': { resolution: [832, 1248] as const, tokens: 1290 },
  '3:2': { resolution: [1248, 832] as const, tokens: 1290 },
  '3:4': { resolution: [864, 1184] as const, tokens: 1290 },
  '4:3': { resolution: [1184, 864] as const, tokens: 1290 },
  '4:5': { resolution: [896, 1152] as const, tokens: 1290 },
  '5:4': { resolution: [1152, 896] as const, tokens: 1290 },
  '9:16': { resolution: [768, 1344] as const, tokens: 1290 },
  '16:9': { resolution: [1344, 768] as const, tokens: 1290 },
  '21:9': { resolution: [1536, 672] as const, tokens: 1290 },
} as const;

export type SupportedNanoBananaRatio = keyof typeof SUPPORTED_ASPECT_RATIOS;

export type RatioOrientation = 'portrait' | 'landscape' | 'square';

export interface RatioDecision {
  requested: string;
  chosen: SupportedNanoBananaRatio;
  orientation: RatioOrientation;
  reason: 'supported' | 'nearest_supported';
  requestedValue: number;
  chosenValue: number;
  resolution: readonly [number, number];
  tokenCost: number;
}

function parseRatio(value: string): { numeric: number; orientation: RatioOrientation } {
  const match = value.trim().match(/^(\d+)\s*:\s*(\d+)$/);
  if (!match) {
    throw new Error(`Invalid ratio "${value}"`);
  }
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (height === 0) {
    throw new Error(`Ratio height must be > 0 for "${value}"`);
  }
  const numeric = width / height;
  const epsilon = 1e-6;
  if (Math.abs(numeric - 1) < epsilon) {
    return { numeric: 1, orientation: 'square' };
  }
  return { numeric, orientation: numeric > 1 ? 'landscape' : 'portrait' };
}

export function chooseNanoBananaRatio(requested: string): RatioDecision {
  const { numeric, orientation } = parseRatio(requested);
  const supported = SUPPORTED_ASPECT_RATIOS[requested as SupportedNanoBananaRatio];
  if (supported) {
    return {
      requested,
      chosen: requested as SupportedNanoBananaRatio,
      orientation,
      reason: 'supported',
      requestedValue: numeric,
      chosenValue: numeric,
      resolution: supported.resolution,
      tokenCost: supported.tokens,
    };
  }

  const portraitKeys: SupportedNanoBananaRatio[] = ['2:3', '3:4', '4:5', '9:16'];
  const landscapeKeys: SupportedNanoBananaRatio[] = ['3:2', '4:3', '5:4', '16:9', '21:9'];
  const candidates: SupportedNanoBananaRatio[] =
    orientation === 'square'
      ? ['1:1']
      : orientation === 'portrait'
      ? portraitKeys
      : landscapeKeys;

  let best: SupportedNanoBananaRatio = candidates[0];
  let smallestDelta = Number.POSITIVE_INFINITY;

  for (const key of candidates) {
    const { resolution } = SUPPORTED_ASPECT_RATIOS[key];
    const candidateValue = resolution[0] / resolution[1];
    const delta = Math.abs(candidateValue - numeric);
    if (delta < smallestDelta) {
      smallestDelta = delta;
      best = key;
    }
  }

  const chosenMeta = SUPPORTED_ASPECT_RATIOS[best];

  return {
    requested,
    chosen: best,
    orientation,
    reason: 'nearest_supported',
    requestedValue: numeric,
    chosenValue: chosenMeta.resolution[0] / chosenMeta.resolution[1],
    resolution: chosenMeta.resolution,
    tokenCost: chosenMeta.tokens,
  };
}

export function mapStyleRatios(ratios: string[]): RatioDecision[] {
  return ratios.map((ratio) => {
    try {
      return chooseNanoBananaRatio(ratio);
    } catch (err) {
      return chooseNanoBananaRatio('1:1');
    }
  });
}
