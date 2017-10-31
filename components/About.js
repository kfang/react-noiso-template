import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import DogBreeds from "./DogBreeds";

class About extends React.Component {
    render(){
        return <div>
            <h1>About Page</h1>
            <button onClick={() => {this.props.history.push('/about/dogs')}}>Show Me Dog Breeds!</button>

            {/* DogBreeds will be shown iff the route is /about/hello */}
            <Route path={`${this.props.match.url}/dogs`} component={DogBreeds} />
        </div>
    }
}

export default withRouter(About);