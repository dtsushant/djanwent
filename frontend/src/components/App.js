// components/App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './todos/Dashboard'; // added
import Header from './layout/Header'; // added
import {Router, Route, Switch } from 'react-router-dom'; // added

//Browser router doesn't require the attribute history to be associated with it
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // added

import history from '../history'; // added
import TodoDelete from './todos/TodoDelete'; // added
import TodoEdit from "./todos/TodoEdit";


import { Provider } from 'react-redux'; // added
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <!-- <Router> -->
                <Router history={history} >
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route exact path='/delete/:id' component={TodoDelete} />
                        <Route exact path='/edit/:id' component={TodoEdit} /> // added
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
