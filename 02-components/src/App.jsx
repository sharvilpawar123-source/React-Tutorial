
import React from 'react'
import Card from '../components/Card'
import navbar from '../components/navbar'

const App = () => {
  const user = "Sharvil"
  return (
    <div>
      {navbar()}
     <div className='card'>
       <h1>{user} Pawar</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus excepturi non, cum ullam, 
        nesciunt eum porro enim veritatis, optio dignissimos quisquam corporis delectus repudiandae sit?</p>
      </div>
    <Card />
    </div>
  )
}

export default App
