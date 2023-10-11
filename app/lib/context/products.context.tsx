import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Product } from "~/types/product";

interface IProductContext {
  products: Product[] | null;
}
const ProductsContext = createContext<IProductContext | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode | undefined, products?: Product[] }> = ({ children, ...props }) => {
  const [products, setProducts] = useState<Product[] | null>(props.products || null);

  const contextValue = useMemo(() => ({ products, setProducts }), [products]);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error(`'useProducts' must be used within an 'ProductsProvider'!`)
  }

  return context;
}