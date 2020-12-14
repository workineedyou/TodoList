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
        keyword: '',
        filter: 'All'
    }

    // устанавливаем значение фильтра
    setFilter = (name) => {
        this.setState({
            filter: name
        })
    }

    filtered = () => {

        const { filter } = this.state

        switch (filter) {
            case 'All':
                return this.state.todoData
                break
            case 'Active':
                return this.state.todoData.filter(item => !item.done)
                break
            case 'Done':
                return this.state.todoData.filter(item => item.done)
                break
            default:
                return this.state.todoData
        }
    }

    componentDidMount() {

        // имитация загрузки данных с сервера
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)
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

    search = (text, arr) => {
        return arr.filter(item => {
            if (item.label.toLowerCase().includes(text.toLowerCase())) {
                return item
            }
        })
    }

    render() {

        // фильтруем задачи по типу
        let res = this.filtered()

        // осуществляем поиск в отфильтрованном массиве
        let result = this.search(this.state.keyword, res)

        // данные для статусбара о количестве выполненых/оставшихся тикетах
        const alreadyDone = this.state.todoData.filter(item => item.done).length
        const remained = this.state.todoData.length - alreadyDone

        if (this.state.isLoading) {
            return <h1 className="wrapper">  ЗАГРУЖАЕТСЯ ...  </h1>
        }

        return (
            <div className="wrapper">

                <AppHeader />
                <StatusBar
                    alreadyDone={ alreadyDone }
                    remained={ remained }/>
                <SearchPanel
                    setKeyword={ this.setKeyword }/>
                <StatusFilter
                    setFilter={ this.setFilter }
                    filter={ this.state.filter }/>

                <TodoList todoData={ result }
                    onDelete={ this.deleteItem }
                    onMarkDone={ this.markDone }
                    onMarkImportant={ this.markImportant }/>

                <AddItemForm addSomeItem={ this.addSomeItem }/>

            </div>
        )
    }
}

export default App