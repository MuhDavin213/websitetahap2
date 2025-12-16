import { useState, useEffect } from 'react';

const CATEGORIES_KEY = 'toko_nusa_indah_categories';

const DEFAULT_CATEGORIES = [
  'Makanan & Minuman',
  'Snack & Permen',
  'Kebutuhan Rumah Tangga',
  'Mainan & Boneka',
  'Alat Tulis',
  'Perawatan Pribadi'
];

export function useCategories() {
  const [categories, setCategories] = useState<string[]>(() => {
    const stored = localStorage.getItem(CATEGORIES_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_CATEGORIES;
  });

  useEffect(() => {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
    // Trigger custom event to notify other components
    window.dispatchEvent(new Event('categoriesUpdated'));
  }, [categories]);

  const addCategory = (newCategory: string) => {
    const trimmed = newCategory.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      return true;
    }
    return false;
  };

  const removeCategory = (category: string) => {
    if (DEFAULT_CATEGORIES.includes(category)) {
      return false; // Tidak boleh hapus kategori default
    }
    setCategories(categories.filter(c => c !== category));
    return true;
  };

  const resetCategories = () => {
    setCategories(DEFAULT_CATEGORIES);
  };

  return {
    categories,
    addCategory,
    removeCategory,
    resetCategories,
    isDefaultCategory: (category: string) => DEFAULT_CATEGORIES.includes(category)
  };
}