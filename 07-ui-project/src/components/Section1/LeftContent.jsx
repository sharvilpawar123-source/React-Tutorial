import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'


const LeftContent = () => {
  return (
    <div className='h-full w-1/3 bg-white flex flex-col justify-between p-3'>
        <HeroText />
        <Arrow />


    </div>
  )
}

export default LeftContent
