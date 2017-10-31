import React from 'react'
import ENV from '../config.jsx'
import {Link} from 'react-router-dom'

class Hello extends React.Component {
    render(){
        return <div>
            <h1>Hello World!</h1>
            <p>Environment: {ENV.environment}</p>
            <Link to="/about">Go to About page</Link>
        </div>
    }
}

export default Hello;
