import { X, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS, DEFAULT_PROMO_BANNERS } from '../../utils/constants';
import type { PromoBannerData } from '../../types';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [banners] = useLocalStorage<PromoBannerData[]>(
    STORAGE_KEYS.PROMO_BANNERS,
    DEFAULT_PROMO_BANNERS
  );

  const activeBanners = banners.filter(b => b.isActive);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeBanners.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % activeBanners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeBanners.length]);

  if (activeBanners.length === 0 || !isVisible) {
    return null;
  }

  const currentBanner = activeBanners[currentIndex];

  return (
    <div
      className="text-white"
      style={{
        backgroundColor: currentBanner.backgroundColor,
        color: currentBanner.textColor
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Tag className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm md:text-base">{currentBanner.text}</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
