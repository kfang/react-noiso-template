import React from 'react'
import Helmet from 'react-helmet'
import ENV from '../config.jsx'

class Hello extends React.Component {
    render(){
        return <div>
            <Helmet title="Title page" />
            <h1>Hello World!</h1>
            <p>Environment: {ENV.environment}</p>
            </div>
    }
}

export default Hello
