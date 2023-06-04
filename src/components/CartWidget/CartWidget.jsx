import cart from "../../../public/cart.png"

const CartWidget = () => {
  return (
    <div className="flex col-start-6 me-12">
      <img className="cursor-pointer h-12" src={cart} alt="Cart"/>
      <p className="cursor-pointer text-white font-semibold">0</p>
    </div>
  )
}

export default CartWidget