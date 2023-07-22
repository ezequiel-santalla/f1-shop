import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ name, price, id, idTeam, idCat, img, logo, stock, description }) => {
  const [counter, setCounter] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addQuantity, setAddQuantity] = useState(0);

  const { addProduct } = useContext(CartContext);

  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleSizeButtonClick = (selectedLetter) => {
    setSelectedSize(selectedLetter);
  };

  const quantityHandler = () => {
    setAddQuantity(counter);

  const item = { id, idTeam, idCat, name, price, img, description };
    addProduct(item, counter);
  };

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
        <p className="flex text-red-500 font-medium mb-5">U$D {price}</p>
        <p className="text-lg font-semibold">{description}</p>
        <p className="text-green-700">
          In Stock - This item will ship between 5 and 7 business days depending on your location.
        </p>

        <div className="col-span-12 bg-gray-200">
          <div className="grid grid-cols-12 grid-rows-4 m-2 p-3">
            <p className="col-span-1 font-medium">Size</p>
            <p className="col-span-11 ps-3">{selectedSize}</p>
            <button
              onClick={() => handleSizeButtonClick('S')}
              className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                selectedSize === 'S' } hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white`}
            >
              S
            </button>
            <button
              onClick={() => handleSizeButtonClick('M')}
              className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                selectedSize === 'M' } hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white`}
            >
              M
            </button>
            <button
              onClick={() => handleSizeButtonClick('L')}
              className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                selectedSize === 'L' } hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white`}
            >
              L
            </button>
            <button
              onClick={() => handleSizeButtonClick('XL')}
              className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                selectedSize === 'XL' } hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white`}
            >
              XL
            </button>
            <button
              onClick={() => handleSizeButtonClick('2XL')}
              className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                selectedSize === '2XL' } hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white`}
            >
              2XL
            </button>
            <button
              onClick={() => handleSizeButtonClick('3XL')}
              className={`mx-3 col-span-2 border-2 bg-white border-black rounded-md font-medium my-1 ${
                selectedSize === '3XL' } hover:bg-red-600 hover:border-red-600 hover:text-white duration-500 focus:bg-red-500 focus:border-red-500 focus:text-white`}
            >
              3XL
            </button>
            <p className="col-span-12 font-medium my-2">Quantity</p>

            <div className="grid grid-cols-3 col-span-3 justify-items-center self-center bg-white border-2 border-black rounded-lg me-6 py-1">
              <button onClick={decrease}> - </button>
              <p>{counter}</p>
              <button onClick={increase}> + </button>
            </div>

            <button onClick={quantityHandler} className={`grid grid-cols-12 col-span-9 items-center font-medium justify-items-end bg-white border-2 border-black hover:scale-105 duration-500 rounded-lg py-2`}>
              <img className="col-span-5 w-6 justify-items-center mx-2" src={logo} alt={name} />
              <p className="col-span-7 self-center justify-self-start mx-2"> Add to Cart </p>
            </button>
          </div>
        </div>
      </div>

      <div className='col-span-2 gap-2'>
        {addQuantity > 0 && (
          <>
            <button className="m-2 p-2 border-2 rounded-xl bg-red-500 border-red-700 text-white font-medium hover:bg-red-700 duration-300">
              <Link to="/">Keep buying</Link>
            </button>
            <button className="m-2 p-2 border-2 rounded-xl bg-red-500 border-red-700 text-white font-medium hover:bg-red-700 duration-300">
              <Link to="/cart">Finish purchase</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;