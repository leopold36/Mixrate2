import React from "react";
import Form from './subComponents/form.js';
import Element from './subComponents/element.js';


class Home extends React.Component {
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
     <div>
       <Form addInvest={this.addInvest}/>
       <Element investments={this.state.investments} deleteInvest={this.deleteInvest} />
     </div>
    )
  }
}




export default Home