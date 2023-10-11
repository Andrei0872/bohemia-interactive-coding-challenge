import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";
import { Product } from "~/types/product";

interface ICartContext {
  cartProducts: Product[] | null;
  addProductToCart: (p: Product) => void;
  isCartOpen: boolean;
  setIsCartOpen: (state: boolean) => void;
}
const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode | undefined }> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<Product[] | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addProductToCart = (p: Product) => {
    // Currently using `name` because the products don't have an `ID` field.
    if (cartProducts?.find(cp => cp.name === p.name)) {
      return;
    }

    setCartProducts(cartProducts => [...(cartProducts || []), p]);
    setIsCartOpen(true);
  }

  const setIsCartOpenHelper = (state: boolean) => {
    setIsCartOpen(state);
  }

  const contextValue = useMemo(() => ({
    cartProducts,
    addProductToCart,
    isCartOpen,
    setIsCartOpen: setIsCartOpenHelper,
  }), [cartProducts]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(`'useCart' must be used within an 'CartProvider'!`)
  }

  return context;
}