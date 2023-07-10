import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ name, price, id, img, logo, stock }) => {
  const [addQuantity, setAddQuantity] = useState(0);

  const {addProduct} = useContext(CartContext);

  const quantityHandler = (quantity) => {
    setAddQuantity(quantity);

  const item = {id, name, price};
  addProduct(item, quantity);
  };

  return (
    <div className='grid grid-rows-2 grid-cols-12 gap-4 mt-6'>
      <div className='grid row-span-2 col-span-6 content-center'>
        <img className='w-80 justify-self-center' src={img} alt={name} />
      </div>

      <div className='col-span-4'>
        <div className="grid grid-cols-12 items-center mb-5">
          <img className="w-8 self-center" src={logo} alt="logo Scuderia" />
          <p className='text-md font-normal col-span-5'>Officially Licensed Gear</p>
        </div>
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className='flex text-red-500 font-medium mb-5'>US$ {price}</p>
        <p className='text-lg font-semibold'>Official Product of the F1 2023 season</p>
        <p className='text-green-700'>In Stock - This item will ship between 5 and 7 business day depending on your location.</p>
      </div>
      {addQuantity > 0 ? (<Link to="/cart">Finish purchase</Link>) : (<ItemCount initial={1} stock={stock} functionAdd={quantityHandler}/>)}
    </div>
  )
}

export default ItemDetail
