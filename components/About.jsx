import React from 'react'
import {withRouter} from 'react-router-dom'


class About extends React.Component {
    render(){
        return <div>
            <h1>About Page</h1>
            <button onClick={() => {this.props.history.push('/')}}>Click Me!</button>
        </div>
    }
}

export default withRouter(About);