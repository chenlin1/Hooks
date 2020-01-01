

// import React from 'react';
// class App extends React.Component {
//   state = {
//     count: 0
//   }
  
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1
//       })
//     }, 1000)
//   }

//   componentWillUnmount() {
//     if(this.interval) {
//       clearInterval(this.interval);
//     }
//   }


//   render() {
//      return(
//      <span>{this,this.state.count}</span>
//      ) 
//   }
// }
// export default App;


import React, { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c=>c+1)
    }, 1000)
    return () => clearInterval(interval);
  },[]);
  return (
    <div className="App">
     <p>{count}</p>
     <button onClick={() => setCount(count + 1)}>Clikc me</button>
    </div>
  );
}

export default App;
