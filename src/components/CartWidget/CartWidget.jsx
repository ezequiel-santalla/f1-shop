import cart from "../../../public/cart.png";

const Cart = () => (
  <div className="flex mx-3 mt-4 mb-3 lg:me-6">
    <div className="lg:flex">
      <img className="w-14" src={cart} alt="Cart" />
    </div>
    <p className="cursor-pointer text-white font-semibold">0</p>
  </div>
);

export default Cart;
