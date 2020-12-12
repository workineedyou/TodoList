import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ label, important = false }) => {

    const styles = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 600 : 400
    }

    return <div className="pointer" style={ styles }>{ label }</div>
}

export default TodoListItem