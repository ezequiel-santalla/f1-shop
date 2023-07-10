import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  const {cart, emptyCart, totalQuantity, totalPrice} = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <h2>No products in the Cart</h2>
        <Link to="/">Show Products</Link>
      </>
    )
  }
  return (
    <div>
      {cart.map(product => <CartItem key={product.id} {...product} />)}
      <h3>Total: $ {totalPrice}</h3>
      <button onClick={() => emptyCart()}>Empty Cart</button>
      <Link to="/checkout">Finish buy</Link>
    </div>
  )
}

export default Cart