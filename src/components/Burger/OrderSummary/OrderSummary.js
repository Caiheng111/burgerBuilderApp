import React,{Fragment} from 'react'
import Button from '../../UI/Button/Button'


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
  <p><strong>Total Price: {props.price}</strong></p>
        <p>Continue to checkOut?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      

    </Fragment>
  )
}

export default OrderSummary;