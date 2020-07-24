
export const deleteTodo = (todo) =>{
    return {type:'DELETE_TODO',todo}
}


export const loadTodos = () =>{

        return async (dispatch) =>{
            const response = await fetch('http://localhost:3004/todos')
            const todos = await response.json()
            const action = {type:"TODO_LOADED_SUCCESS", payload:todos}
            dispatch(action)
        }
}