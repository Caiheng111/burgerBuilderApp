import React from './node_modules/react'
import styles from './BuildControl.css'



 const BuildControl = (props) => {
  
  return (
    <div className={styles.BuildControls}>
         <div className={styles.Label}>{props.label}</div>
         <button className={styles.Less}>Less</button>
         <button className={styles.More}>More</button>
    </div>
  )
}


export default BuildControl;