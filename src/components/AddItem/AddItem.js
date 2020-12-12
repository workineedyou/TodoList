import React from 'react'

class AddItem extends React.Component {

    render() {
        return (
            <div
                onClick={ () => this.props.addSomeItem('rrr') }
                className="btn btn-outline-dark mt-3">add</div>
        )
    }

}

export default AddItem