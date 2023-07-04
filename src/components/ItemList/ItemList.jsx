import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-12">
      <div className='col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
    </div>
  )
}

export default ItemList