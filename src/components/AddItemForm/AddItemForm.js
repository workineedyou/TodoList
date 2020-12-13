import React from 'react'

class AddItemForm extends React.Component {

    state = {
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()

        if (this.state.searchText) {
            this.props.addSomeItem(this.state.searchText)
        }

        this.setState({
            searchText: ''
        })
    }

    render() {
        return (
            <form action="" className="form-group add-item d-flex" onSubmit={ this.handleSubmit }>
                <input type="text" className="form-control mt-4 border border-dark"
                onChange={ this.handleChange }
                value={ this.state.searchText }
                placeholder=" ... "/>
                <input type="submit" value="Добавить задачу" className="btn btn-outline-dark mt-4 ml-1"/>
            </form>
        )
    }
}

export default AddItemForm