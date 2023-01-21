import React, {memo} from 'react'

const Header = ({setShowModal}) => {
  return (
    <div className='flex justify-start p-4 bg-slate-300 fixed w-screen h-[100px] z-[10]'>
      <button 
      onClick={() => setShowModal(true)}
      className='bg-sunsetOrange px-6 rounded-md text-white opacity-90 hover:opacity-100'
      >
        Add Task</button>
    </div>
  )
}

export default memo(Header)