import React from 'react'
import RightCardContentText from './RightCardContentText'


const RightContentCard = (props) => {


  return (
    <div className='h-full w-70 rounded-3xl overflow-hidden relative shrink-0 '>
        <img className='h-full w-full object-cover ' src={props.img} alt="" />
         <RightCardContentText tag={props.tag} id={props.id} color={props.color} />
      
    </div>
  )
}

export default RightContentCard
