import React,{Fragment} from 'react'
import burgerLogo from '../../assets/images/burger.png'
import styles from './Logo.css'


 const Logo = (props) => {
  return (

    <Fragment>
        <div className={styles.Logo}>
          <img src={burgerLogo} alt=""/>
        </div>
    </Fragment>

   

  )
}

export default Logo;
