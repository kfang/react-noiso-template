import React from 'react'
import ENV from '../config.jsx'
import {Link} from 'react-router-dom'
import DogCEO from "../utils/DogCEO";

class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state = {breeds: []}
    }

    componentWillMount(){
        DogCEO.listAll().then((r) => {
            const {message = {}} = r;
            const breeds = Object.keys(message);
            this.setState({breeds: breeds})
        })
    }

    render(){
        const {breeds= []} = this.state;

        return <div>
            <h1>Hello World!</h1>
            <p>Environment: {ENV.environment}</p>
            <Link to="/about">Go to About page</Link>

            <h3>Dog Breeds (via fetch)</h3>
            <ul>
               {breeds.map((breed, idx) => {
                   return <li key={idx}>{breed}</li>
               })}
            </ul>
        </div>
    }
}

export default Hello;
