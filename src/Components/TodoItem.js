import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { deleteTodoItem, editTodoItem } from './Actions'
import { TbEdit } from 'react-icons/tb';
import { ImCancelCircle } from 'react-icons/im';
import {TiTickOutline} from "react-icons/ti"


const TodoItem = ({id,title}) => {
    const [update , setUpdate] = useState(false)
    const [edit, setEdit] = useState(title)

    const dispatch = useDispatch()


const OnSaveTodo = () => {
    if(edit.trim()){
        const newTodo =  {
            id : id,
            title : edit,
        }
        dispatch(editTodoItem(newTodo))
        setUpdate(false)
    }
}


  return (
    <>
    {
        update ? 
        <div className='save'>
            <input type='text' className='border-[0px] bg-slate-200 w-[92%] h-[40px] rounded-tl-[8px] rounded-bl-[8px]' value={edit} onChange={e => setEdit(e.target.value)}/>
            <button type='button' className='edit text-[40px]' onClick={OnSaveTodo}><TiTickOutline /></button>
        </div>
        :
        <li className='flex flex-row justify-between'>
            <p className='font-[800] ml-[20px] text-[#000000]'>{title}</p>
            <div>
                <button type='button' className = "edit" onClick={()=> setUpdate(true)}><TbEdit /></button>
                <button type='button' onClick={()=>dispatch(deleteTodoItem(id))} className='edit edit1'><ImCancelCircle /></button>
            </div>
        </li>
        
    }

    </>
  )
}

export default TodoItem