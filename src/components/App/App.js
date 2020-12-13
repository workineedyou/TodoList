import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SeachPanel'
import TodoList from '../TodoList/TodoList'
import StatusFilter from '../StatusFilter/StatusFilter'
import AddItemForm from '../AddItemForm/AddItemForm'
import StatusBar from '../StatusBar/StatusBar'

import './App.css'

class App extends React.Component {

    state = {
        todoData: [
            { id: 1, label: 'Wake up', important: false, done: false },
            { id: 2, label: 'Do something', important: false, done: false },
            { id: 3, label: 'Go to sleep', important: false, done: false },
        ],
        isLoading: true,
        keyword: ''
    }

    componentDidMount() {

        // имитация загрузки данных с сервера
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 300)
    }

    // random id
    id = 100

    // метод добавляет задачу
    addSomeItem = (text) => {

        let obj = { id: this.id++, label: text, important: false, done: false }

        this.setState(prevState => {

            // собираем новый массив
            const newArr = [ ...prevState.todoData, obj]

            return {
                todoData: newArr
            }
        })
    }

    // удаляем выделеную задачу
    deleteItem = (id) => {

        this.setState(prevState => {

            const newState = prevState.todoData.filter(item => item.id !== id)

            return {
                todoData: newState
            }
        })
    }

    // делаем пункт списка завершенным
    markDone = (id, field) => {
        this.changerOfState(id, field)
    }

    // выделяем задачу как важную
    markImportant = (id, field) => {
        this.changerOfState(id, field)
    }

    changerOfState = (id, field) => {
        this.setState(prevState => {

            let index = prevState.todoData.findIndex(el => el.id === id)

            let oldItem = prevState.todoData[index]

            // создаем shallow-copy??? старого объекта и меняем в нем значение свойства
            let newItem = { ...oldItem, [field]: !oldItem[field] }

            let firstArr = prevState.todoData.slice(0, index)
            let lastArr = prevState.todoData.slice(index + 1)

            let newData = [ ...firstArr, newItem, ...lastArr ]

            return {
                todoData: newData
            }
        })
    }

    setKeyword = (text) => {
        this.setState({
            keyword: text
        })
    }

    search = (text) => {
        return this.state.todoData.filter(item => {
            if (item.label.toLowerCase().includes(text.toLowerCase())) {
                return item
            }
        })
    }

    render() {

        let res = this.search(this.state.keyword)

        // данные для статусбара о количестве выполненых/оставшихся тикетах
        const alreadyDone = this.state.todoData.filter(item => item.done).length
        const remained = this.state.todoData.length - alreadyDone

        if (this.state.isLoading) {
            return <h1 className="wrapper">  LOADING ...  </h1>
        }

        return (
            <div className="wrapper">

                <AppHeader />
                <StatusBar
                    alreadyDone={ alreadyDone }
                    remained={ remained }/>
                <SearchPanel
                    setKeyword={ this.setKeyword }/>
                <StatusFilter />

                <TodoList todoData={ res }
                    onDelete={ this.deleteItem }
                    onMarkDone={ this.markDone }
                    onMarkImportant={ this.markImportant }/>

                <AddItemForm addSomeItem={ this.addSomeItem }/>

            </div>
        )
    }
}

export default App