import React from 'react'
import './SearchPanel.css'


const SearchPanel = () => {

    return (
        <form className="search-panel form-group mr-3" action="">
            <input className="form-control flexed"  type="text" placeholder="search" />
        </form>
    )
}

export default SearchPanel