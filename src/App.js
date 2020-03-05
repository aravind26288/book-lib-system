import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Manage from './components/Manage';
import Layout from './components/Layout';
import './App.css';

export class App extends React.Component{
  render(){
    return (
      <Router>
        <Layout className="book-lib-app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/manage' component={Manage} />
        </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App;
