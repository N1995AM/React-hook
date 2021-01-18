
import React, { useReducer, useEffect, useState } from "react"; 

function reducer(state, action) {
  switch (action.type) {
      case 'INCREASE':
      return { value: state.value + 1 };
      case 'DECREASE':
      return { value: state.value - 1 };
      default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
     <div className="App">
      <p> Current Counter Value : {state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
      </div>
  );
};

export default App;