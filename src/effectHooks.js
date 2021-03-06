

import React, { useState, useReducer, useEffect, useLayoutEffect } from 'react';


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
  const [name, setName] = useState('jokcy');
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(c=>c+1)
  //     dispatchCount({ type: "add"})
  //   }, 1000)
  //   return () => clearInterval(interval);
  // },[]);

  useEffect(() => {
    console.log("effect qqq");
    return ()=> console.log("effect 222")
  },[count])
 
  // 会在
  useLayoutEffect(() => {
    console.log("useLayoutEffect qqq");
    return ()=> console.log("useLayoutEffect 222")
  },[count])

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
     <button onClick={()=> dispatchCount({ type: "add" })}>{count}</button>
     {/* <button onClick={() => setCount(count + 1)}>Clikc me</button> */}
    </div>
  );
}

export default App;