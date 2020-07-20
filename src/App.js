import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyles from '../src/styles/global'

import Home from '../src/components/Home';
import Header from '../src/components/Header';
import NewAdd from '../src/components/NewAdd';
import NewList from '../src/components/NewList';
import About from '../src/components/About';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import NotFound from '../src/components/NotFound';
// import Footer from '../src/components/Footer';


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
          <Route exact path='/about' component={About}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
