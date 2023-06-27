import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getProduct(idItem)
      .then(res => setProduct(res))
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer