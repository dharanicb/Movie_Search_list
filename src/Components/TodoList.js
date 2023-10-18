import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
console.log(todos)

  return (
    <ul>
        {todos.map((todo)=> (
            <TodoItem  id = {todo.id} key = {todo.id} title = {todo.title}/>
        ))}
    </ul>
  )
}

export default TodoList