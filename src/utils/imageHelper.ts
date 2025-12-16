// Image Helper - Centralized image management
// Menggunakan localStorage untuk custom images

import { imageGallery } from '../data/imageGallery';

const CUSTOM_IMAGES_KEY = 'toko_nusa_indah_custom_images';

/**
 * Get all custom images from localStorage
 */
export function getCustomImages(): Record<string, string> {
  const stored = localStorage.getItem(CUSTOM_IMAGES_KEY);
  return stored ? JSON.parse(stored) : {};
}

/**
 * Save custom image to localStorage
 */
export function saveCustomImage(key: string, base64Data: string): void {
  const customImages = getCustomImages();
  customImages[key] = base64Data;
  localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(customImages));
}

/**
 * Upload and save custom image, returns the generated key
 */
export function uploadCustomImage(base64Data: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  const key = `custom_${timestamp}_${random}`;
  saveCustomImage(key, base64Data);
  return key;
}

/**
 * Delete custom image from localStorage
 */
export function deleteCustomImage(key: string): void {
  const customImages = getCustomImages();
  delete customImages[key];
  localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(customImages));
}

/**
 * Convert file to base64
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Resolve image key to actual URL
 */
export function getImageUrl(imageKey: string): string {
  // Jika sudah berupa URL atau base64, return langsung
  if (imageKey.startsWith('http://') || imageKey.startsWith('https://') || imageKey.startsWith('data:')) {
    return imageKey;
  }
  
  // Check custom images first
  const customImages = getCustomImages();
  if (customImages[imageKey]) {
    return customImages[imageKey];
  }
  
  // Resolve dari gallery preset
  return imageGallery[imageKey] || imageGallery.noodles; // fallback ke noodles
}

/**
 * Get all available image keys (preset + custom)
 */
export function getAvailableImageKeys(): string[] {
  const presetKeys = Object.keys(imageGallery);
  const customKeys = Object.keys(getCustomImages());
  return [...presetKeys, ...customKeys];
}

/**
 * Check if image key exists
 */
export function isValidImageKey(key: string): boolean {
  const customImages = getCustomImages();
  return key in imageGallery || key in customImages;
}