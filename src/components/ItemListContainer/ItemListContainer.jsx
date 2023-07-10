import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory, getProductsByTeam } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  const {idTeam} = useParams();

  useEffect(() => {
    const functionProducts = idCategory ? getProductsByCategory : idTeam ? getProductsByTeam : getProducts;

    functionProducts(idCategory ? idCategory : idTeam)
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [idCategory, idTeam])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
