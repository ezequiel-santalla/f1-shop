import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect( () => {
    const newDoc = doc(db, "products", idItem)

    getDoc(newDoc)
      .then(response => {
        const data = response.data()
        const newProduct = {id: response.id, ...data}
        setProduct(newProduct)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer