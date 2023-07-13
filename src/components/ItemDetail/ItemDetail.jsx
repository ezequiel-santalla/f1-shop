import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ name, price, id, idTeam, idCat, img, logo, stock }) => {
  const [counter, setCounter] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addProduct } = useContext(CartContext);

  const handleSizeButtonClick = (selectedLetter) => {
    setSelectedSize(selectedLetter);
  };

  const handleCounterChange = (newCounter) => {
    if (newCounter >= 1 && newCounter <= stock) {
      setCounter(newCounter);
    }
  };

  const quantityHandler = () => {
    addProduct({ id, idTeam, idCat, name, price, img }, counter);
  };

  const sizeButtons = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

  return (
    <div className="grid grid-cols-12 gap-4 mt-6">
      <div className="grid row-span-2 col-span-12 sm:col-span-6 content-center">
        <img className="w-80 justify-self-center" src={img} alt={name} />
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-4 sm:px-4 md:px-0">
        <div className="grid grid-cols-12 items-center mb-5">
          <img className="w-8 self-center" src={logo} alt="logo Scuderia" />
          <p className="text-md font-normal col-span-5">Officially Licensed Gear</p>
        </div>
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="flex text-red-500 font-medium mb-5">US$ {price}</p>
        <p className="text-lg font-semibold">Official Product of the F1 2023 season</p>
        <p className="text-green-700">In Stock - This item will ship between 5 and 7 business day depending on your location.</p>

        <div className="col-span-12 bg-gray-200">
          <div className="grid grid-cols-12 grid-rows-4 m-2 p-3">
            <p className="col-span-1 font-medium">Size</p>
            <p className="col-span-11 ps-3">{selectedSize}</p>
            {sizeButtons.map((size) => (
              <button key={size} onClick={() => handleSizeButtonClick(size)} className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                  selectedSize === size ? 'hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white' : ''
                }`}
              >
                {size}
              </button>
            ))}
            <p className="col-span-12 font-medium my-2">Quantity</p>

            <div className="grid grid-cols-3 col-span-3 justify-items-center self-center bg-white border-2 border-black rounded-lg me-6 py-1">
              <button onClick={() => handleCounterChange(counter - 1)}> - </button>
              <p>{counter}</p>
              <button onClick={() => handleCounterChange(counter + 1)}> + </button>
            </div>

            <button onClick={quantityHandler} className={`grid grid-cols-12 col-span-9 items-center font-medium justify-items-end bg-white border-2 border-black hover:scale-105 duration-500 rounded-lg py-2`}>
              <img className="col-span-5 w-6 justify-items-center mx-2" src={logo} alt={name} />
              <p className="col-span-7 self-center justify-self-start mx-2"> Add to Cart </p>
            </button>
          </div>
        </div>
      </div>

      {counter > 0 && <Link to="/">Keep buying</Link>}
      {counter > 0 && <Link to="/cart">Finish purchase</Link>}
    </div>
  );
};

export default ItemDetail;



