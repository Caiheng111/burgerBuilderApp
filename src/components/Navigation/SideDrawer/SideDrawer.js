import React from 'react'
import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import styles from './SideDrawer.css'

const SideDrawer = (props) => {
   return(
    <div className={styles.SideDrawer}>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
       
    </div>
   )
 }


export default SideDrawer;