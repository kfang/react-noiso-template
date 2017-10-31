import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import Hello from './Hello'

class About extends React.Component {
    render(){
        console.log(this.props);
        return <div>
            <h1>About Page</h1>
            <button onClick={() => {this.props.history.push('/about/hello')}}>Click Me To Show Hello!</button>

            {/* the component hello will be show iff the route is /about/hello */}
            <Route path={`${this.props.match.url}/hello`} component={Hello} />
        </div>
    }
}

export default withRouter(About);