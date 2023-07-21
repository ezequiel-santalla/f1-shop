import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import flag from "../../../public/flag.png";
import cartLogo from "../../../public/cartLogo.png";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <h2 className="flex justify-center m-10 p-5 font-medium text-3xl border-2 border-red-700 bg-red-200 rounded-xl">No products in the Cart</h2>
        <Link className="flex justify-center items-center text-lg gap-4" to="/">
          <p>Take me to the products</p>
          <img className="w-20" src={cartLogo} alt="cart logo" />
        </Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <div className="grid grid-cols-12 m-12">
        <p className="col-span-12 sm:col-start-2 sm:col-end-12 md:col-end-11">Subtotal: U$D {totalPrice.toFixed(2)}</p>
        <p className="col-span-12 sm:col-start-2 sm:col-end-12 md:col-end-11">Estimated Tax: U$D {(totalPrice * 0.21).toFixed(2)}</p>
        <h1 className="col-span-12 sm:col-start-2 sm:col-end-12 md:col-end-11 font-bold text-xl">Total: U$D {(totalPrice * 1.21).toFixed(2)}{" "}</h1>
        <div className="col-span-12 sm:col-start-12 sm:col-end-12 md:col-end-12">
          <button className="col-span-12 sm:col-start-2 sm:col-end-13">
            <Link className="flex gap-2 items-center justify-end" to="/checkout">
              <p className="">Buy Now</p>
              <img className="" src={flag} alt="flag" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
