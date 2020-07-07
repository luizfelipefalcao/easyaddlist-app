import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../src/components/Home';
import Header from '../src/components/Header';
import NewAdd from '../src/components/NewAdd';
import NewList from '../src/components/NewList';
import About from '../src/components/About';
import Login from '../src/components/Login';
import NotFound from '../src/components/NotFound';
import Footer from '../src/components/Footer';

function App() {
  return (

    <React.Fragment>
      <GlobalStyle/>
      <BrowserRouter>
        <Header path='/' component={Home}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/newadd' component={NewAdd}/>
          <Route exact path='/newlist' component={NewList}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/login' component={Login}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
