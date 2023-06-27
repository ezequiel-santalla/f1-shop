import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();

  useEffect(() => {
    const functionProducts = idCategory ? getProductsByCategory : getProducts;

    functionProducts(idCategory)
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [idCategory])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
