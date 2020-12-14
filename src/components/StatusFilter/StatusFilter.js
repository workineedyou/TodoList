import React from 'react'

class StatusFilter extends React.Component {



    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success mr-1" name="all" onClick={ (e) => this.props.setFilter(e) }>All</button>
                <button type="button" className="btn btn-outline-secondary mr-1" name="active" onClick={ (e) => this.props.setFilter(e) }>Active</button>
                <button type="button" className="btn btn-outline-secondary" name="done" onClick={ (e) => this.props.setFilter(e) }>Done</button>
            </div>
        )
    }
}

export default StatusFilter