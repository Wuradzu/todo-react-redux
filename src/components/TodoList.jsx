import React, { memo } from 'react'
import { TiPencil } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import { toggleCompleted, removeTask } from '../store/toDoSlice';
import { useDispatch } from 'react-redux';


const TodoList = ({todo: {task, id, completed}, handleUpdate}) => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-between bg-Tangaroa rounded-md p-4 text-white items-center'>
      <div 
      className={`overflow-x-auto break-words ${completed && 'line-through'}`}
      onClick={() => dispatch(toggleCompleted(id))}
      >{task}</div>
      <div className='flex gap-6 items-center text-xl'>
        <TiPencil className='hover:text-sunsetOrange cursor-pointer' onClick={() => handleUpdate(id, task)}/>
        <BsTrash className='hover:text-sunsetOrange cursor-pointer' onClick={() => dispatch(removeTask(id))}/>
      </div>
    </div>
  )
}

export default memo(TodoList)