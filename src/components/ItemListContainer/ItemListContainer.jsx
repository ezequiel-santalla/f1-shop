import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  const {idTeam} = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let myProducts = collection(db, "products");

        if (idCategory && idTeam) {
          myProducts = query(
            myProducts,
            where("idCat", "==", idCategory),
            where("idTeam", "==", idTeam)
          );
        } else if (idCategory) {
          myProducts = query(myProducts, where("idCat", "==", idCategory));
        } else if (idTeam) {
          myProducts = query(myProducts, where("idTeam", "==", idTeam));
        }

        const querySnapshot = await getDocs(myProducts);
        const newProducts = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(newProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [idCategory, idTeam]);

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
