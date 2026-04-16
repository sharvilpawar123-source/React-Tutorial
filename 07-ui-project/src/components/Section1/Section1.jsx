import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'

const Section1 = (props) => {
    
  return (
    <div className=' h-screen w-full p-2.5 '>
      <Navbar />
      <PageContent users={props.users}/>
    </div>
  )
}

export default Section1
