import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import Hello from './components/hello.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Hello} />
    </Router>
), document.getElementById("mount-point"));
