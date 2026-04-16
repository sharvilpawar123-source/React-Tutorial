import React, { useState } from 'react'

const App = () => {

//1  const [a, setNum] = useState(20);

// const changeNum=()=>{
//   setNum(30)
// }

// 2
const [state, setState] = useState(0);
const increment=()=>{
  setState(state+1);
}
const decrement=()=>{
  setState(state-1);
}
const jumpBy10=()=>{
  setState(state+10);
}





  return (
    <div className='nav'>
     {/* <h1>val of a is {a}</h1>
     <button onClick={changeNum}>click here</button> */}
     <h1>{state}</h1>
<button onClick={increment}>Increase </button>
<button onClick={decrement}>Decrese </button>
<button onClick={jumpBy10}>jump by 10 </button>

    </div>
  )
}

export default App
