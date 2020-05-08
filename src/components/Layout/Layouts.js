import React,{Fragment} from 'react'
import styles from './Layouts.modules.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


 const Layouts = (props) => {
  return (

    <Fragment>
        <div>
          {/* hamburger menu */}
          <Toolbar/>
          <SideDrawer/>
          <main className={styles.content}>
            {props.children}
          </main>
        </div>
    </Fragment>


  )
}

export default Layouts;
