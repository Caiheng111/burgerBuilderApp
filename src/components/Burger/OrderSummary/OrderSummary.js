import React,{Fragment} from 'react'


 const OrderSummary = (props) => {

   const ingredientSummary = Object.keys(props.ingredients)
   .map(igKey=>{
     return (
     <li sty={{textTransform:'capitalize'}} key={igKey}>
       <span>{igKey}</span>{props.ingredients[igKey]}
       </li>
     )
   })


  return (
    <Fragment>
        <h3>Your Order</h3>
        <p>A Delicious Burger with the following ingredients </p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Continue to checkOut?</p>
    </Fragment>
  )
}

export default OrderSummary;