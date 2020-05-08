import React,{Fragment} from 'react'
import burgerLogo from '../../assets/images/burger.png'
import styles from './Logo.css'


 const Logo = (props) => {
  return (

    <Fragment>
        <div className={styles.Logo} style={{height:props.height}}>
          <img src={burgerLogo} alt=""/>
        </div>
    </Fragment>

   

  )
}

export default Logo;
