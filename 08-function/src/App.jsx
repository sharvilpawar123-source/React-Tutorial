import React from 'react'

const App = () => {



  return (
    <div>
      {/* <h1>It is react js tutorial </h1>
<button onClick={function(){
  console.log("Hello");
  
}}>Click me</button> */}

<input onChange={(elem)=>{
console.log(elem);
console.log(elem.target);
console.log(elem.target.value);
// console.log(elem.clientX); on (onWheel) scrolling downseedha scroll or ulta scroll dikhata hr

}} type="text" placeholder='Enter Your Name' />
    </div>
  )
}

export default App
