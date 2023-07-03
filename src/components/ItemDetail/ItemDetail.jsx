const ItemDetail = ({ name, price, img, logo }) => {
  return (
    <div className='grid grid-rows-2 grid-cols-12 gap-4 mt-12'>
      <div className='grid row-span-2 col-span-6 content-center justify-self-center w-1/2'>
        <img className='justify-self-center' src={img} alt={name} />
      </div>
      <div className='col-span-4'>
        <div className="grid grid-cols-6 items-center">
          <img className="w-8 self-center justify-self-center" src={logo} alt="logo Scuderia" />
          <p className='text-md font-normal col-span-5'>Officially Licensed Gear</p>
        </div>
        <h3 className="font-semibold text-2xl mt-2 ms-7">{name}</h3>
        <p className='flex text-lg text-black font-medium ms-7'>US$ {price}</p>
        <p className='mt-8 mb-4 ms-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero deleniti fugit dignissimos voluptate, corrupti explicabo cupiditate sint quia dolores totam suscipit possimus quidem dicta nobis quo tenetur perferendis debitis!</p>
      </div>
      <div className='col-span-4 bg-gray-100 ms-7'>

      </div>
    </div>
  )
}

export default ItemDetail
