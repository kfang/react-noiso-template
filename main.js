import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Hello from './components/Hello.jsx';
import About from './components/About.jsx';
import 'whatwg-fetch'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Hello} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
), document.getElementById("mount-point"));
