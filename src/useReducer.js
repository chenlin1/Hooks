

import React, { useState, useReducer, useEffect } from 'react';


function conutReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state -1
    default:
      return state
  }
}

function App() {
  // const [count, setCount] = useState(0);
  const [count, dispatchCount ] = useReducer(conutReducer, 0);
  useEffect(() => {
    const interval = setInterval(() => {
      // setCount(c=>c+1)
      dispatchCount({ type: "add"})
    }, 1000)
    return () => clearInterval(interval);
  },[]);
  return (
    <div className="App">
     <p>{count}</p>
     {/* <button onClick={() => setCount(count + 1)}>Clikc me</button> */}
    </div>
  );
}

export default App;