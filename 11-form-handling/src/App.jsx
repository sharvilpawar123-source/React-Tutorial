import React from 'react'

const App = () => {

  const submitted=(e)=>{
    e.preventDefault();
    console.log("form is submitted");
    
  }

  return (
    <div>
      <form action="post" onSubmit={(e)=>
        submitted(e)
      }>
        <label for="text"> Name :</label>
        <input type="text" id='text' />
        <label for="email"> Email :</label>
        <input type="email" id='email'placeholder='Enter the Email' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
