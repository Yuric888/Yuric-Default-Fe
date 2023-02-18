import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItems = {
  id: number;
  quantity: number;
};

type ShoppingCartContextProps = {
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItems[];
  cartsQuantity: number;

  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>(
    "yuric-shopping-cart",
    []
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const cartsQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const getQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        cartItems,
        cartsQuantity,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
      <ShoppingCart open={isOpen} close={closeCart} cartItems={cartItems} />
    </ShoppingCartContext.Provider>
  );
};
