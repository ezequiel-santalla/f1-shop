import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalPrice: 0,
  totalQuantity: 0
})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (item, quantity) => {
    const existingProduct = cart.find(prod => prod.item.id === item.id);

    if(!existingProduct) {
      setCart(prev => [...prev, {item, quantity}]);
      setTotalQuantity(prev => prev + quantity)
      setTotalPrice(prev => prev + (item.price * quantity));
    }
    else {
      const updatedCart = cart.map ( prod => {
        if(prod.item.id === item.id) {
          return {...prod, quantity: prod.quantity + quantity}
        }
        return prod;
      });
      setCart(updatedCart);
      setTotalQuantity(prev => prev + quantity);
      setTotalPrice(prev => prev + (item.price * quantity));
    }
  }

  const removeProduct = (id) => {
    const productRemoved = cart.find( prod => prod.item.id === id);
    const updatedCart = cart.filter(prod => prod.item.id !== id);
    setCart(updatedCart);
    setTotalQuantity(prev => prev - productRemoved.quantity);
    setTotalPrice(prev => prev - (productRemoved.item.price * productRemoved.quantity));
  }

  const emptyCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  }

  return (
    <CartContext.Provider value={{cart, totalQuantity, totalPrice, addProduct, removeProduct, emptyCart}}>
      {children}
    </CartContext.Provider>
  )
}

