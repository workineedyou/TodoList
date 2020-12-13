import React from 'react'
import './SearchPanel.css'


class SearchPanel extends React.Component {

    state = {
        searchText: ''
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })

        this.props.setKeyword(e.target.value)
    }

    render() {
        return (
            <form
                className="search-panel form-group mr-3" action="">
                <input className="form-control flexed"
                       onChange={ this.handleChange }
                       value={ this.state.searchText }
                       type="text" placeholder="Search" />
            </form>
        )
    }
}

export default SearchPanel