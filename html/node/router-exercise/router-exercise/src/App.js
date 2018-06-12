import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import Images from './Images.js';
import Home from './Home';
import One from './One';
import Two from './Two';
import Three from './Three';
import About from './About';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <Route exact path="/" render={Home} />
            <Route exact path="/one" render={One} />
            <Route exact path="/two" render={Two} />
            <Route exact path="/three" render={()=>(
              <Images props = {atlImages}/>)} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
