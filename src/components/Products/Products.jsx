import { useState, useEffect } from "react";
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config.js";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect( ()=> {
    const myProducts = query(collection(db, "inventory"))

    getDocs(myProducts)
      .then(response => {
        setProducts(response.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
      .catch(error => console.log(error))
    },[products])

  const discountStock = async(product) => {
    const productRef = doc(db,"inventory", product.id);
    const newStock = product.stock - 1;

    await updateDoc(productRef, {stock: newStock});
  }

  return (
    <>
      <h2>Products</h2>
      <div className="products-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h2> {product.nombre} </h2>
            <p> Price: $ {product.price} </p>
            <p> Stock: {product.stock} </p>
            <button onClick={() => discountStock(product)}> Buy </button>
          </div>))
        }
      </div>
    </>
  )
}

export default Products