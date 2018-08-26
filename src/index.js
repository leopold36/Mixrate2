import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';



class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
