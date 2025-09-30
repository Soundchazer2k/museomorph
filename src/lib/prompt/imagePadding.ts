import { PaddingPlan } from './types';

function parseRatio(ratio: string): number {
  const parts = ratio.split(':').map(Number);
  if (parts.length !== 2 || parts.some((value) => Number.isNaN(value) || value <= 0)) {
    throw new Error(`Invalid ratio "${ratio}". Expected format like 2:3.`);
  }
  return parts[0] / parts[1];
}

/**
 * Computes how much padding is required to wrap an image within a target aspect ratio without cropping.
 */
export function planPadding(
  originalWidth: number,
  originalHeight: number,
  targetRatio: string,
): PaddingPlan {
  if (originalWidth <= 0 || originalHeight <= 0) {
    throw new Error('Image dimensions must be positive numbers.');
  }

  const ratio = parseRatio(targetRatio);

  const currentRatio = originalWidth / originalHeight;
  let targetWidth = originalWidth;
  let targetHeight = originalHeight;

  if (Math.abs(currentRatio - ratio) < 1e-6) {
    return {
      targetWidth,
      targetHeight,
      padTop: 0,
      padRight: 0,
      padBottom: 0,
      padLeft: 0,
    };
  }

  if (currentRatio > ratio) {
    // Image is too wide; add padding vertically
    targetHeight = Math.round(originalWidth / ratio);
  } else {
    // Image is too tall or square compared to target; add padding horizontally
    targetWidth = Math.round(originalHeight * ratio);
  }

  const padHeight = targetHeight - originalHeight;
  const padWidth = targetWidth - originalWidth;

  const padTop = Math.floor(padHeight / 2);
  const padBottom = padHeight - padTop;
  const padLeft = Math.floor(padWidth / 2);
  const padRight = padWidth - padLeft;

  return {
    targetWidth,
    targetHeight,
    padTop,
    padRight,
    padBottom,
    padLeft,
  };
}

/**
 * Draws an HTMLImageElement onto a padded canvas matching the requested ratio.
 * Falls back gracefully if no DOM/canvas environment is available.
 */
export async function createPaddedCanvas(
  image: HTMLImageElement | HTMLCanvasElement,
  targetRatio: string,
  background: string | CanvasGradient | CanvasPattern = 'rgba(0,0,0,0)',
): Promise<HTMLCanvasElement> {
  if (typeof document === 'undefined') {
    throw new Error('createPaddedCanvas requires a browser environment.');
  }

  const { naturalWidth, naturalHeight } = (image as HTMLImageElement);
  const width = (naturalWidth ?? image.width);
  const height = (naturalHeight ?? image.height);
  const plan = planPadding(width, height, targetRatio);

  const canvas = document.createElement('canvas');
  canvas.width = plan.targetWidth;
  canvas.height = plan.targetHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to acquire 2D context.');
  }

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, plan.padLeft, plan.padTop, width, height);

  return canvas;
}
