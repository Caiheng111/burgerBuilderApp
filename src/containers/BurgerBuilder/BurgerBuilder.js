import React, { Component,Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'

 class BurgerBuilder extends Component {

  state={
    ingredients:{
      salad :2,
      bacon:0,
      cheese:0,
      meat:0
    }
  }


  
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls/>
      </Fragment>
    )
  }
}

export default BurgerBuilder;