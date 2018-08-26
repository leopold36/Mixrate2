import React from "react";

// const Element = (props) => {
//       const {invest} = props
//       const investList = invest.map(inv => {
//           if (inv.amount > 60){
//             return(
//              <div key={inv.id}> Name: {inv.name} Amount: {inv.amount}</div>
//           ) }
//         else {return(null)}
//       });
    
  
const Element = (props) => {
      const {investments, deleteInvest} = props
      const investList = investments.map(inv => {
            return inv.amount > 40 ? (<div>
                <div key={inv.id}> Name: {inv.name} Amount: {inv.amount}</div>
                <button onClick= {() => {deleteInvest(inv.id)}}>Delete</button>
              </div>
          ) : null;
      });
  return(
    <div>{investList} </div>
  );
  }

  
export default Element