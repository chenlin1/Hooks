

import React, { 
  useState, 
  useReducer, 
  useEffect, 
  useContext, 
  useLayoutEffect,
  useRef 
} from 'react';
import MyContext from './my-context';

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
  
  const context = useContext(MyContext);
  const inputRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(c=>c+1)
  //     dispatchCount({ type: "add"})
  //   }, 1000)
  //   return () => clearInterval(interval);
  // },[]);

  useEffect(() => {
    console.log("effect qqq");
    console.log(inputRef);
    return ()=> console.log("effect 222")
  },[count])
 
  // 会在
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect qqq");
  //   return ()=> console.log("useLayoutEffect 222")
  // },[count])

  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
     <button onClick={()=> dispatchCount({ type: "add" })}>{count}</button>
     {/* <button onClick={() => setCount(count + 1)}>Clikc me</button> */}
     <p>{context}</p>
    </div>
  );
}

export default App;