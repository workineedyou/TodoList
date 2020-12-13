import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todoData, onDelete, onMarkDone, onMarkImportant }) => {

    let elementsItems = todoData.map(item => {
        return (
            <li key={ item.id } className="list-group-item">
                <TodoListItem label={ item.label } important={ item.important } done={ item.done }
                onDelete={ () => onDelete(item.id) }
                onMarkDone={ () => onMarkDone(item.id, 'done') }
                onMarkImportant={ () => onMarkImportant(item.id, 'important') }/>
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