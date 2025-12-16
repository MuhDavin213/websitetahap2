import { useState, useEffect } from 'react';

type CategoryNavProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export function CategoryNav({ selectedCategory, onCategoryChange }: CategoryNavProps) {
  const [categories, setCategories] = useState<string[]>(['Semua']);

  useEffect(() => {
    // Load categories from localStorage
    const loadCategories = () => {
      const stored = localStorage.getItem('toko_nusa_indah_categories');
      if (stored) {
        const parsedCategories = JSON.parse(stored);
        setCategories(['Semua', ...parsedCategories]);
      }
    };

    // Initial load
    loadCategories();

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'toko_nusa_indah_categories') {
        loadCategories();
      }
    };

    // Listen for custom event from admin panel
    const handleCategoriesUpdate = () => {
      loadCategories();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('categoriesUpdated', handleCategoriesUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('categoriesUpdated', handleCategoriesUpdate);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6">
      <h3 className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Kategori Produk</h3>
      {/* Desktop: flex-wrap, Mobile: horizontal scroll */}
      <div className="hidden sm:flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Mobile: horizontal scroll with visible scrollbar */}
      <div className="sm:hidden flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 category-scroll">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex-shrink-0 text-sm ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 active:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}