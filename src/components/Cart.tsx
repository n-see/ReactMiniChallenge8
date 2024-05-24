import { useState } from 'react'

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {

    const [cart, setCart] = useState({
       discount: .1,
       items: [
        {id: 1, title: 'Product 1', quantity: 1},
        {id: 2, title: 'Product 2', quantity: 1}
       ] 
    })

    const handleClick =() => {
       setCart({...cart, items: cart.items.map(item => item.id == 1 ? {...item, quantity: item.quantity + 1}: item)})
    }
  return (
    <>
      {/* Title, show items, button to handle the update Update Cart  */}
      <span>{cart.items[0].title} </span>
      <span>{cart.items[0].quantity} </span>
      <button onClick={handleClick}>Add 1 to quantity</button>
      
    </>
  )
}

export default Cart
