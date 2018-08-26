import React from "react";


class Form extends React.Component {
  state = {
    name: null,
    amount: null
  }
  
handleChange = (e) =>{
  this.setState({
    [e.target.id]: e.target.value   
  });   
}


submitHandler =(e) =>{
  e.preventDefault();
  this.props.addInvest(this.state);
  
}

  render() {
    return (
    <div>
        <form onSubmit={this.submitHandler}>
          <label hmtlfor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/> 
          <label hmtlfor="amount">Amount:</label>
          <input type="text" id="amount" onChange={this.handleChange}/> 
          <button>Submit</button>
        </form>
    </div>
    );
  }
}

export default Form