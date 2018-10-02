import React, { Component } from 'react';
import {connect} from 'react-redux';



  /*state = {
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

 */
/*
<button onClick={this.onAgeUp}>Age UP</button>
<button onClick = {this.onAgeDown}>Age Down</button>
*/
class App extends Component {
  render() {
    return (
      <div>
       <div>Age: <span> {this.props.age}</span></div>
       <button onClick={this.props.onAgeUp}>Age UP</button>
       <button onClick = {this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}
//if you want to access the store from anywhere you need to map it
//map props to store and actions

//we need to map state to props so it is available to us
const mapStateToProps = (state) => {
return{
  age: state.age
};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (App);
