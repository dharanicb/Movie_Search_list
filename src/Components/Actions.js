export const AddTodoItem = (todos) => {
    return {type:"Add_todo", payload : todos}
}
export const editTodoItem = (todos) => {
    return {type:"Edit_todo", payload : todos}
}
export const deleteTodoItem = (id) => {
    return {type:"Delete_todo", payload : id}
}
export const AddProfile = (userProfile) => {
    return {type:"Add_profile", payload : userProfile}
}