import React from 'react';
import Home from './container/RouterPages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import RoutPages from './container/RouterPages/Router'



class App extends React.Component{
  render(){
    return(
      <div>

        
        <RoutPages />

        
      </div>
    )
  }
}

export default App;
