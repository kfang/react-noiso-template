import React from 'react'
import 'whatwg-fetch'

const DogCEO = {
    listAll: () => {
        return fetch(`https://dog.ceo/api/breeds/list/all`)
            .then((r) => {return r.json()})
    }
};

export default DogCEO