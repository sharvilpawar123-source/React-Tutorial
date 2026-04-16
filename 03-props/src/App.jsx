import React from 'react'
import Card from '../components/card'

const App = () => {
  return (
    <div className='parent'>

    <Card user="Sarthak" age={28} img="https://images.unsplash.com/photo-1774244764183-13c1a850ae4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
    <Card user="Sharvil" age={18} img="https://images.unsplash.com/photo-1771747131849-41056d3d9be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" />
    <Card user="Aman" age={30} img="https://plus.unsplash.com/premium_photo-1711367287679-d6ce302fdc2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />


    </div>
  )
}

export default App
