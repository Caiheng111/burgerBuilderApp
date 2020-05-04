import React from 'react'
import Styles from './Modal.css'

 const Modal = (props) => {
  return (
    <div className={Styles.Modal}
    style={{
      tranform: props.show? 'translateY(0)' : 'translateY(-100)',
      opacity:props.show? '1': '0'
    }}>
      
      {props.children}
    </div>
  )
}

export default Modal
