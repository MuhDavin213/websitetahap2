import { useLocalStorage } from './useLocalStorage';
import { initialProducts } from '../data/products';
import { STORAGE_KEYS } from '../utils/constants';
import type { Barang } from '../types';

export function useProducts() {
  const [products, setProducts] = useLocalStorage<Barang[]>(
    STORAGE_KEYS.PRODUCTS,
    initialProducts
  );

  const addProduct = (product: Omit<Barang, 'id_barang'>) => {
    const newId = products.length > 0 
      ? Math.max(...products.map(p => p.id_barang)) + 1 
      : 1;
    
    const newProduct: Barang = {
      ...product,
      id_barang: newId
    };
    
    setProducts([...products, newProduct]);
  };

  const updateProduct = (product: Barang) => {
    setProducts(products.map(p => 
      p.id_barang === product.id_barang ? product : p
    ));
  };

  const deleteProduct = (id_barang: number) => {
    setProducts(products.filter(p => p.id_barang !== id_barang));
  };

  const getProductById = (id_barang: number) => {
    return products.find(p => p.id_barang === id_barang);
  };

  const getProductsByCategory = (category: string) => {
    if (category === 'Semua') return products;
    return products.filter(p => p.kategori === category);
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductsByCategory
  };
}
