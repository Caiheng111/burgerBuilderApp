import React from 'react'
import styles from '../Burger/Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'


 const Burger = ({ingredients}) => {
  let transformedIngredients = Object.keys( ingredients )
        .map( igKey => {
            return [...Array( ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            } );
        })
          // console.log(transformedIngredients)
    
        .reduce((arr, ele)=>{
            return arr.concat(ele)
        }, []);
          // console.log(transformedIngredients)

        if (transformedIngredients.length ===0){
        transformedIngredients = <p> Please start add ingredients</p>
        }

  return (
    <div className={styles.Burger}>
        <BurgerIngredients type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>  
    </div>
  )
}


export default Burger;
