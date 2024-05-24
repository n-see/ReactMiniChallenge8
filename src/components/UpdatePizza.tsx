import React, { useState } from 'react'


//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppings
const UpdatePizza = () => {

    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom,','Onions,']
    });

    const handleClick = () => {
        //pizza.toppings.push('Cheese');
        // setPizza({...pizza,toppings:['Mushroom,','Onions,', 'Cheese'] })
        // setPizza({...pizza, [...toppings, 'cheese' ]})
        setPizza({...pizza, toppings:[...pizza.toppings, ' cheese '] })
        
    }
  return (
    <>
      <span>pizza toppings : {pizza.toppings}</span>
      <button onClick={handleClick}>Add Cheese</button>
    </>
  )
}

export default UpdatePizza
