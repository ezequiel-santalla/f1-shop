import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import crane from "../../../public/crane.png";

const CartItem = ({ item, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="grid grid-cols-12 items-center m-12 pb-8 border-b-2">
      <div className="col-start-2">
        <img className='w-32' src={item.img} alt={item.name} />
      </div>

      <div className="col-start-4 col-span-8">
        <h4><strong>Name:</strong> {item.name} </h4>
        <p><strong>Quantity:</strong> {quantity} </p>
        <p><strong>Price: U$D</strong> {(item.price * quantity).toFixed(2)} </p>
      </div>
      <div>
        <button className="col-start-12" onClick={() => removeProduct(item.id)}>
          <img src={crane} alt="crane" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;



