const ItemDetail = ({ name, price, img, logo }) => {
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

      <div className='col-span-4 bg-gray-100'>
        <div className="grid grid-cols-12 grid-rows-4 items-start m-2 p-3">
          <p className="col-span-1 font-medium">Size</p>
          <p className="col-span-11 ps-3">{price}</p>
          <button className="col-span-2 border-2 border-black rounded-md my-1 me-3">S</button>
          <button className="col-span-2 border-2 border-black rounded-md my-1 me-3">M</button>
          <button className="col-span-2 border-2 border-black rounded-md my-1 me-3">L</button>
          <button className="col-span-2 border-2 border-black rounded-md my-1 me-3">XL</button>
          <button className="col-span-2 border-2 border-black rounded-md my-1 me-3">2XL</button>
          <button className="col-span-2 border-2 border-black rounded-md my-1">3XL</button>
          <p className="col-span-12 font-medium my-2">Quantity</p>

          <button className="col-span-4 self-center">
            <p>{price}</p>
          </button>

          <button className="grid grid-cols-12 col-span-8 self-center justify-items-end text-white bg-red-800 hover:bg-red-900 rounded-md py-2">
            <img className="col-span-5 w-6 justify-items-center mx-2" src={logo} alt="logo Scuderia" />
            <p className="col-span-7 self-center justify-self-start mx-2">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
