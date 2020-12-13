import React from 'react'
import './TodoListItem.css'


class TodoListItem extends React.Component {

    render() {

        // DATA
        const { label, onDelete, done, important, onMarkDone, onMarkImportant } = this.props

        let classNames = 'pointer'

        if (done) {
            classNames += ' line-through'
        }

        if (important) {
            classNames += ' important-text'
        }

        return (
            <div className="flexy">
                <div
                    className={ classNames }
                    onClick={ onMarkDone }>{ label }
                </div>
                <div>
                    <button type="button" className="btn btn-outline-danger fa fa-trash-o mr-1"
                    onClick={ onDelete }> </button>
                    <button type="button" className="btn btn-outline-success fa fa-exclamation"
                    onClick={ onMarkImportant }> </button>
                </div>
            </div>
        )
    }
}

export default TodoListItem