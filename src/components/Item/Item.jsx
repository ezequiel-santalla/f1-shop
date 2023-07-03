import { Link } from 'react-router-dom'

const Item = ({ name, price, id, img }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className='grid m-8'>
        <img className='justify-self-center hover:scale-105 transition duration-300 ease-in-out' src={img} alt={name} />
        <p className='flex justify-center text-xl text-red-600 font-medium mt-6'>${price} USD</p>
        <h3 className='flex justify-center text-lg font-normal'>{name}</h3>
      </div>
    </Link>
  )
}

export default Item