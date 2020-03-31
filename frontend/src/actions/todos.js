import axios from 'axios';
import history from '../history'; // added
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO,EDIT_TODO } from './types'; // added GET_TODO and DELETE_TODO


// GET TODOS
export const getTodos = () => async dispatch => {
    const res = await axios.get('/api/todos/');
    dispatch({
        type: GET_TODOS,
        payload: res.data
    });
};

// ADD TODO
export const addTodo = formValues => async dispatch => {
    const res = await axios.post('/api/todos/', { ...formValues });
    dispatch({
        type: ADD_TODO,
        payload: res.data
    });
    dispatch(reset('todoForm'));
};

// GET TODO
export const getTodo = id => async dispatch => { // added
    const res = await axios.get(`/api/todos/${id}/`);
    dispatch({
        type: GET_TODO,
        payload: res.data
    });
};

// DELETE TODO
export const deleteTodo = id => async dispatch => { // added
    await axios.delete(`/api/todos/${id}/`);
    dispatch({
        type: DELETE_TODO,
        payload: id
    });
    history.push('/');
}

// EDIT TODO
export const editTodo = (id, formValues) => async dispatch => {
    const res = await axios.patch(`/api/todos/${id}/`, formValues);
    dispatch({
        type: EDIT_TODO,
        payload: res.data
    });
    history.push('/');
};