
import React, { Component, Fragment } from 'react'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layouts from './components/Layout/Layouts'


 class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Layouts>
              <BurgerBuilder>
                
              </BurgerBuilder>
          </Layouts>
        </div>
        
      </Fragment>
    )
  }
}

export default App
