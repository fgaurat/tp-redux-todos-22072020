import { connect } from 'react-redux'
import TodoList from './TodoList';
import {deleteTodo, loadTodos} from './actions'
const mapStateToProps = (state) => ({
    todos:state.todos,
    loading:state.loading,
})


const mapDispatchToProps = (dispatch) =>{

    return {
        handleDelete: (todo) => {
            dispatch(deleteTodo(todo))
        },
        loadTodos : () => {
            dispatch(loadTodos())
        }
    }
}

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default TodoListContainer;