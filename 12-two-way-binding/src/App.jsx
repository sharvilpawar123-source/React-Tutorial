import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('');

  const submitted=(e)=>{
    e.preventDefault();
    console.log("form is submitted by",title);
    settitle('');
  }

  return (
    <div>
      <form action="post" onSubmit={(e)=>
        submitted(e)
      }>
        <label for="text"> Name :</label>
        <input type="text"
         id='text'
         placeholder='Enter Your Name'
         value={title}
         onChange={
          (e)=>{
            settitle(e.target.value)
          }
         }
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
