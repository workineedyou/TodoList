import React from 'react'
import './StatusBar.css'

const StatusBar = ({ alreadyDone, remained }) => {
    return (
        <div className="status-bar">{ alreadyDone } сделано, { remained } осталось</div>
    )
}

export default StatusBar