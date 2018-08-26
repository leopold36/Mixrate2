import React from "react";
import ReactDOM from "react-dom";
import Element from './element.js';
import Form from './form.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component {
  state = {
    investments: [ 
    {name: "EQT", amount: 60, id: 1},
    {name: "Nordic",amount: 100, id: 2}
  ]
}

addInvest = (invest) => {
  invest.id = Math.random();
  //copy the array so you can add a new value
  let investments = [...this.state.investments, invest];
  // set the state with the updates copy
  this.setState({
    investments: investments
  });
}

// filter is true objecct will remain in array, False will 
deleteInvest = (id) => {
  let investments = this.state.investments.filter(invest =>{
//if the id of the item is not equal to the deleted ID is will be true
    return invest.id !== id})
    
    this.setState({
      investments: investments
    });
}
  
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello There {this.state.name}</h1>
        <Form addInvest={this.addInvest}/>
        <Element investments={this.state.investments} deleteInvest={this.deleteInvest} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
