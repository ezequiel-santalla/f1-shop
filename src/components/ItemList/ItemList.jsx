import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div className='grid grid-cols-5'>
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList