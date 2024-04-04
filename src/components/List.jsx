import React from 'react';
import Row from './Row';
import {  useSelector } from 'react-redux';

export default function List() {
    // the first todos refer to the slice 'name'
    // the second todos refer to the state inside the file
    const todos = useSelector((state) => state.todos.todos);
    
    return (
        <div>
            <h2>To do List</h2>
            <ul>
                {
                    todos.map(val => <Row item={val} key={val.id} />)
                }
            </ul>
        </div>
    )
}


