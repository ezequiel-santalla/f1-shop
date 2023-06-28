const ItemDetail = ({ name, price, img }) => {
  return (
    <div className='grid grid-rows-2 grid-cols-12 gap-4 mt-12'>
      <div className='row-span-2 col-span-6 justify-self-center w-1/2'>
        <img className='' src={img} alt={name} />
      </div>
      <div className='col-span-4'>
        <h3 className='flex text-2xl font-semibold'>{name}</h3>
        <p className='flex text-lg text-red-600 font-medium'>${price} USD</p>
        <p className='mt-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero deleniti fugit dignissimos voluptate, corrupti explicabo cupiditate sint quia dolores totam suscipit possimus quidem dicta nobis quo tenetur perferendis debitis!</p>
      </div>
      <div className='col-span-4 bg-gray-100'>

      </div>
    </div>
  )
}

export default ItemDetail