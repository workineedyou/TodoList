import React from 'react'

class StatusFilter extends React.Component {

    btnsData = [
        { name: "All" },
        { name: "Active" },
        { name: "Done" },
    ]

    render() {

        const { filter } = this.props


        const btns = this.btnsData.map(item => {

            const isActive = filter === item.name

            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'

            return <button className={ `btn mr-1 ${ clazz } `} key={ item.name }
                           onClick={ () => this.props.setFilter(item.name) }>{ item.name }</button>
        })

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                { btns }
            </div>
        )
    }
}

export default StatusFilter