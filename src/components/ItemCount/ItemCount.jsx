import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
  const [counter, setCounter] = useState(1);

  let maxStock = 10;

  const increase = () => {
    if (counter < maxStock) {
      setCounter(counter + 1);
    }
  }

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <button onClick={decrease}> - </button>
      <p> {counter} </p>
      <button onClick={increase}> + </button>
    </div>
  )
}

export default ItemCount