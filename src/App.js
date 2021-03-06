import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyles from '../src/styles/global'

import Home from '../src/components/Home';
import Header from '../src/components/Header';
import NewAdd from '../src/components/NewAdd';
import NewList from '../src/components/NewList';
// import About from '../src/components/About';
import NotFound from '../src/components/NotFound';


function App() {
  return (

    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Header path='/' component={Home}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/newadd' component={NewAdd}/>
          <Route exact path='/newlist' component={NewList}/>
          {/* <Route exact path='/about' component={About}/> */}
          <Route path='*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
