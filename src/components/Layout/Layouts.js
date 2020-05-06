import React,{Fragment} from 'react'
import styles from './Layouts.modules.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

 const Layouts = (props) => {
  return (

    <Fragment>
        <div>
          <Toolbar/>
          <main className={styles.content}>
            {props.children}
          </main>
        </div>
    </Fragment>

   

  )
}

export default Layouts;
