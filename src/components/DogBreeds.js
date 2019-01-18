import React from 'react'
import DogCEO from "../utils/DogCEO";

class DogBreeds extends React.Component {
    constructor(props){
        super(props);
        this.state = {breeds: []};
    }

    componentWillMount(){
        DogCEO.listAll().then((r) => {
            const {message = {}} = r;
            const breeds = Object.keys(message);
            this.setState({breeds: breeds})
        })
    }

    render(){
        const {breeds = []} = this.state;

        return <div>
            <h3>Dog Breeds (via fetch)</h3>
            <ul>
                {breeds.map((breed, idx) => {
                    return <li key={idx}>{breed}</li>
                })}
            </ul>
        </div>
    }
}

export default DogBreeds
