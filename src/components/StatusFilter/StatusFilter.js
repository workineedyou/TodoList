import React from 'react'

class StatusFilter extends React.Component {


    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success mr-1">All</button>
                <button type="button" className="btn btn-outline-secondary mr-1">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}

export default StatusFilter