import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const inistialTodoList = {
    todos : [{id:1,title : "Go to Movie"}],
    userProfile : [{id:1,name: "John" , email : "John@gmail.com" , phoneNo : "987654386" , dateOfBirth : "23/11/2020" , occupation : "content" ,address : "23/7 andrapradesh"}],
    movieList : {},
    nextId : 2,
}
function addCheckTodoList(state = inistialTodoList, action){
    switch(action.type){
        case "Add_todo" :
            const newTodo = {id:state.nextId, title : action.payload.title}
            return {...state, todos:[...state.todos,newTodo],nextId : state.nextId + 1}
        case "Add_profile" :
            const newProfile = {id:state.nextId, name: action.payload.name, email : action.payload.email , phoneNo : action.payload.phoneNo , dateOfBirth : action.payload.dateOfBirth, occupation: action.payload.occupation, address : action.payload.address}
            return {...state, userProfile:[...state.userProfile,newProfile],nextId : state.nextId + 1}
        case "Edit_todo":
            return {...state , todos: state.todos.map((todo) => (
                todo.id === action.payload.id ? {...todo,title: action.payload.title} : todo
            ))}
        case "Delete_todo" :
            return {...state, todos:state.todos.filter((todo) =>todo.id !== action.payload)}
        case "Search_todo" :
            return {...state, movieList:action.payload}
        default:
            return state
    }
}


const Store = createStore(addCheckTodoList,applyMiddleware(thunk))
export default Store