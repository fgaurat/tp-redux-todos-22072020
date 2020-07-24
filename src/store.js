const initTodos = {
    "loading":true,
    "todos":[]
}

export const reducerTodoList = (state = initTodos, action) => { 

    let newState = {...state}

    switch(action.type){
        case "TODO_LOADED_SUCCESS":
            newState.todos=action.payload
            break;
    }
    return newState
}
