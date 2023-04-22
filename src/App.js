
import Quiz from "./components/Quiz";
import './App.css';
export default function App() {
  
  return (
    <div className="App">
      <Quiz/>
      
    </div>
  );
}


















// import React, { useCallback, useState } from "react";
// import Todo from "./Todo";

// export default function App() {
//     const [data,setData]=useState()
//   const [count, setCount] = React.useState(0);

//   const handledata=()=>{
//     console.log("data handle by api ")
//   }
//  const Counter = useCallback(()=>{
//     setCount(count+1)
//  },[count])
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox {count}</h1>
//        <button onClick={handledata}>Click</button>
//        <Todo Abc ={Counter}/>
//     </div>
//   );
// }
