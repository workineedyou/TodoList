import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SeachPanel'
import TodoList from '../TodoList/TodoList'
import StatusFilter from '../StatusFilter/StatusFilter'
import AddItem from '../AddItem/AddItem'

import './App.css'

class App extends React.Component {


    state = {
        todoData: [
            { id: 1, label: 'Drink Coffee', important: false },
            { id: 2, label: 'Learn React', important: false },
            { id: 3, label: 'Create React Application', important: true },
        ]
    }

    id = 100

    addSomeItem = (text) => {

        // let obj = { id: this.id++, label: text, important: false }

    }

    deleteItem = (id) => {

        this.setState(prevState => {

            const newState = prevState.todoData.filter(item => item.id != id)

            return {
                todoData: newState
            }
        })
    }

    render() {
        return (
            <div className="wrapper">

                <AppHeader />
                <SearchPanel />
                <StatusFilter />

                <TodoList todos={ this.state.todoData }
                onDelete={ this.deleteItem }/>

                <AddItem addSomeItem={ this.addSomeItem }/>

            </div>
        )
    }
}

export default App