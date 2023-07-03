import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory, getProductsByTeam } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  const {idTeam} = useParams();

  useEffect(() => {
    const functionProducts = idCategory ? getProductsByCategory : getProducts;

    functionProducts(idCategory)
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [idCategory])

  useEffect(() => {
    const functionProducts = idTeam ? getProductsByTeam : getProducts;

    functionProducts(idTeam)
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [idTeam])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
