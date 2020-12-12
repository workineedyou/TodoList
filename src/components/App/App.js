import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SeachPanel'
import TodoList from '../TodoList/TodoList'
import todosData from '../Data/todosData'

class App extends React.Component {

    state = {
        todos: todosData
    }

    render() {
        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <TodoList todos={ this.state.todos } />
            </div>
        )
    }
}

export default App