import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos }) => {

    let buttons = (
        <div>
            <button type="button" className="btn btn-outline-danger fa fa-trash-o mr-1"></button>
            <button type="button" className="btn btn-outline-success fa fa-exclamation"></button>
        </div>
    )

    let elementsItems = todos.map(item => {
        return (
            <li key={ item.id } className="list-group-item flexed">
                <TodoListItem label={ item.label } important={ item.important } />
                { buttons }
            </li>
        )
    })

    return (
        <ul className="todoList list-group">
            { elementsItems }
        </ul>
    )
}

export default TodoList