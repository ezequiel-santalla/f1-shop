import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../../public/cart.png";

const Cart = () => {
  const { totalQuantity } = useContext(CartContext);

  const quantityDisplay = totalQuantity >= 100 ?
    (<p className="cursor-pointer text-white font-semibold">99+</p>) : (
    <p className="cursor-pointer text-white font-semibold">
      {totalQuantity}
    </p>
  );

  return (
    <div className="flex ms-5 lg:ms-0 mt-4 mb-3 lg:me-6">
      <div>
        <Link className="flex" to="cart">
          <img className="w-14" src={cart} alt="Cart" />
          {quantityDisplay}
        </Link>
      </div>
    </div>
  );
}

export default Cart;

