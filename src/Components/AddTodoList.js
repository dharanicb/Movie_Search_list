import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodoItem } from './Actions'
import TodoList from './TodoList'

const AddTodoList = () => {
    const [addTodo, setAddTodo] = useState("")
    const dispatch = useDispatch()

    const OnAddTodoItems = () => {
      if(addTodo.trim()){
        const newTodo = {
          title : addTodo
        }
        dispatch(AddTodoItem(newTodo))
        setAddTodo("")
      } 
    }

  return (
    <div className='text-center'>
        <div>
        <h1 className='text-[30px] font-[800] m-[20px] text-[#ffffff] hover:underline'>Todo List : Add,Edit,delate</h1>
        <div>
            <input type='text' className='border[gray] w-[60%] h-[60px] rounded-tl-[8px] rounded-bl-[8px] p-[15px] text-[#ffffff]' value={addTodo} onChange={e => setAddTodo(e.target.value)} placeholder='What can I do ? let you want just Add Todo......'/>
            <button type='button' className='py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-[0px] rounded-tl-none rounded-bl-none h-[61px] w-[100px]' onClick={OnAddTodoItems}>Add</button>
        </div>
        <TodoList />
        </div>
    </div>
  )
}

export default AddTodoList