import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) =>{
  return(
    <div>
      <h1> I am a counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick} >Increment</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) =>{
  console.log("mapDispatchToProps");
  return {
    onIncrementClick: () =>{
      const action = { type: "INCREMENT"};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps)(Counter);

