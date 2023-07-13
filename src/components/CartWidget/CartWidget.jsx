import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cartLogo from "../../../public/cartLogo.png";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="flex ms-5 lg:ms-0 mt-4 mb-3 lg:me-6">
      <div>
        <Link className="flex" to="/cart">
          <img className="w-20 me-1 hover:scale-125 duration-500" src={cartLogo} alt="Cart" />
          {totalQuantity > 0 && <strong className="text-white"> {totalQuantity} </strong>}
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;

