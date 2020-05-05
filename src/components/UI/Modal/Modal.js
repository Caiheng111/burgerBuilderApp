import React,{Fragment} from 'react'
import Styles from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

 const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show}/>
       <div className={Styles.Modal}
        style={{
          tranform: props.show? 'translateY(0)' : 'translateY(-100)',
          opacity:props.show? '1': '0'
        }}>
        
        {props.children}
      </div>
    </Fragment>
   
  )
}

export default Modal
