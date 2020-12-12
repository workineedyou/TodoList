import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SeachPanel'
import TodoList from '../TodoList/TodoList'
import StatusFilter from '../StatusFilter/StatusFilter'
import todosData from '../Data/todosData'


import './App.css'

class App extends React.Component {

    state = {
        todos: todosData
    }

    render() {
        return (
            <div className="wrapper">
                <AppHeader />
                <SearchPanel />
                <StatusFilter />
                <TodoList todos={ this.state.todos } />
            </div>
        )
    }
}

export default App