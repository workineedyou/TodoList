import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos }) => {

    let elementsItems = todos.map(item => {
        return (
            <li key={ item.id }>
                <TodoListItem label={ item.label } important={ item.important } />
            </li>
        )
    })

    return (
        <ul className="todoList">
            { elementsItems }
        </ul>
    )
}

export default TodoList