import React from 'react'
import './TodoListItem.css'


class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {

        this.setState(prevState => {
            return {
                done: !prevState.done
            }
        })
    }

    markImportant = () => {
        this.setState(prevState => {
            return {
                important: !prevState.important
            }
        })
    }

    render() {

        let classNames = 'pointer'

        const { label, onDelete } = this.props
        const { done, important } = this.state

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
                    onClick={ this.onLabelClick }>{ label }
                </div>
                <div>
                    <button type="button" className="btn btn-outline-danger fa fa-trash-o mr-1"
                    onClick={ onDelete }></button>
                    <button type="button" className="btn btn-outline-success fa fa-exclamation"
                    onClick={ this.markImportant }></button>
                </div>
            </div>
        )

    }
}

export default TodoListItem