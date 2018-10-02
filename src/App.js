import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    age: 21
  }
  //takes current state and increases by one
  onAgeUp = () => {
//create a copy and mutate/return and set it
this.setState({
  ...this.state,
  age: ++this.state.age
})
  }
  //takes current state and decreases by one
onAgeDown = () => {
  this.setState({
    ...this.state,
    age: --this.state.age
  })
    }

 

  render() {
    return (
      <div>
       <div>Age: <span> {this.state.age}</span></div>
       <button onClick={this.onAgeUp}>Age UP</button>
       <button onClick = {this.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

export default App;
