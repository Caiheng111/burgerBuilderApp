import React from 'react'
import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

 const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>MERN</div>
    <div className={styles.Logo}>
       <Logo/>
    </div>
   
    <nav>
      <NavigationItems/>
    </nav>
  </header>

 )


export default Toolbar;