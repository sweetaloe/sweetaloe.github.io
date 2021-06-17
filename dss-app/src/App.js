import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import React from 'react';
import CreateFrame from './components/CreateFrameComponent';
import Menu from './components/MenuComponent';

import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css'




class App extends React.Component {
  render() {
    return <Router>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3">
            <Menu />
          </div>
          <div class="col">
            <Route path="/" exact component={CreateFrame} />
          </div>
        </div>
      </div>
    </Router>

  }
}


export default App;
