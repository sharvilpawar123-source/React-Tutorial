import React from 'react'
import RightContentCard from './RightContentCard'

const RightContent = (props) => {
    // console.log(props);
    
    
  return (
       <div className='h-full w-2/3 p-3 flex overflow-x-auto flex-nowrap gap-8 '>
        {props.users.map(function(ele ,idx){
         return  <RightContentCard key={idx} img={ele.img} tag={ele.tag} id={idx} color={ele.color} />
        })} 
      
    </div>
  )
}

export default RightContent
