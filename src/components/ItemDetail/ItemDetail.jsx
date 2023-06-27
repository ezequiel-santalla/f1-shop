const ItemDetail = ({ name, price, id, img }) => {
  return (
    <div className='text-center m-12'>
      <h2>Name: {name} </h2>
      <h3>Price: {price} </h3>
      <h3>ID: {id} </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum dolorem culpa, ipsum, pariatur molestias aliquam, dolor consequatur magni iusto porro eum rem aspernatur magnam. Deserunt facilis alias tenetur totam.</p>
      <img className='w-80 inline-flex' src={img} alt={name} />
    </div>
  )
}

export default ItemDetail