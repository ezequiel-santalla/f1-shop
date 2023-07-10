import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../../public/cart.png";

const Cart = () => {
  const {totalQuantity} = useContext(CartContext)

  return (
    <div className="flex mx-3 mt-4 mb-3 lg:me-6">
      <div>
        <Link className="flex" to="cart">
          <img className="w-14" src={cart} alt="Cart" />
          {<p className="cursor-pointer text-white font-semibold">{totalQuantity}</p>}
        </Link>
      </div>
    </div>
  );
}


export default Cart;
