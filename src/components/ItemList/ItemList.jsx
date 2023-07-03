import Item from "../Item/Item"
import SideBar from "../SideBar/SideBar"

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-12">
      <SideBar />

      <div className='col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
    </div>
  )
}

export default ItemList