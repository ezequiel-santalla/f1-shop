import { Link } from 'react-router-dom'

const Item = ({ name, price, id, img }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className='rounded-md m-8'>
        <img className='mb-4' src={img} alt={name} />
        <p className='flex justify-center text-xl text-red-600 font-medium m-1'>${price} USD</p>
        <h3 className='flex justify-center text-lg font-normal m-1'>{name}</h3>
      </div>
    </Link>
  )
}

export default Item