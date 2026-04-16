import React from 'react'
import { MoveRight } from 'lucide-react'


const RightCardContentText = (props) => {


  return (
         <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-11 w-11 flex justify-center items-center font-bold text-xl'>{props.id+1}</h2>
            <div>
                <p className='text-lg mb-7 text-white font-bold leading-relaxed'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit laborum sed autem consectetur rem.</p>
                <div className='flex  items-center justify-between '>
                   <button style={{backgroundColor: props.color}} className=' text-white px-8 py-2 rounded-full text-lg font-medium'>{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className=' text-white px-3 py-3 rounded-full text-lg font-medium'><MoveRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContentText
