import React, { useEffect } from 'react'

export default function TodoList(props) {


    useEffect( () => {
        console.log("useEffect")
        props.loadTodos()
    },[])



    const todoItems = props.todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onDelete={() => props.handleDelete(todo)} />
    ))

    return (

        <div>
            <h3>TodoList {props.loading && "(loading)"}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Title</th>
                        <th>Completed?</th>
                        <th>dueDate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todoItems}
                </tbody>
            </table>
        </div>
    )
}

function TodoListItem({ todo, onDelete }) {

    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed && "Ok"}</td>
            <td>{todo.dueDate}</td>
            <td>
                <button className='btn btn-danger' onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )

}
