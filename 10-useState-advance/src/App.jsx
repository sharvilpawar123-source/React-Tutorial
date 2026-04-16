import React, { useState } from 'react'

const App = () => {

  // const  [num, setNum] = useState({user:"Sharvil",age:18});

  // const btnClicked = ()=>{
  //   const newNum={...num};
  //   newNum.user="Sharvan";
  //   newNum.age=18.5;
  //   setNum(newNum)

    
  // }

  const [num, SetNum] = useState([10,20,30]);
     const btnClicked = ()=>{
     const newNum=[...num]
    newNum.push(99)
     SetNum(newNum)
    //  setNum(prev=>(...prev,age:20))
}

  return (
    <div>
      <h1>{num} </h1>
      <button  onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
