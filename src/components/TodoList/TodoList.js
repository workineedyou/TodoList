import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos, onDelete }) => {

    let elementsItems = todos.map(item => {
        return (
            <li key={ item.id } className="list-group-item">
                <TodoListItem label={ item.label } important={ item.important }
                onDelete={ () => onDelete(item.id) }/>
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