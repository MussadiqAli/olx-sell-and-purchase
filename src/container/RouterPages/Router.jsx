import React from 'react';
import Home from './home';
import Sell from './sell';

import {BrowserRouter as Router, Route,} from "react-router-dom";


class RoutPages extends React.Component{
    render(){
      return(
          <Router>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/sell'} component={Sell} />
          </Router>
      )
    }
}

export default RoutPages;