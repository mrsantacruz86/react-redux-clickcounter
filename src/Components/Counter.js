import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) =>{
  return(
    <div>
      <h1> I am a counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick} >Increment</button>
      <button onClick={props.onDecrementClick} >Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onIncrementClick: () =>{
      const action = { type: "INCREMENT"};
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = {type: "DECREMENT"};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

