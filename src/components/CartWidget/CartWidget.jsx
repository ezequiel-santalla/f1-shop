import cart from "../../../public/cart.png";

const Cart = () => (
  <div className="flex items-center justify-center md:col-start-6 md:me-12">
    <img className="cursor-pointer h-10" src={cart} alt="Cart" />
    <p className="cursor-pointer text-white font-semibold">0</p>
  </div>
);

export default Cart;
