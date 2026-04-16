import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='flex  gap-5   items-center h-[90vh] px-18 py-4'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default PageContent
