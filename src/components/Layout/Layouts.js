import React,{Fragment} from 'react'
import styles from './Layouts.modules.css';

 const Layouts = (props) => {
  return (

    <Fragment>
        <div>
          Toolbar, SideDrawer, Backdrop
          <main className={styles.content}>
            {props.children}
          </main>
        </div>
    </Fragment>

   

  )
}

export default Layouts;
