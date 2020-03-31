
// components/todos/Dashboard.js

import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate'; // added


class Dashboard extends Component {
    render() {
        return (
            <div className='ui container'>
                <TodoCreate />
                <TodoList />
            </div>
        );
    }
}

export default Dashboard;