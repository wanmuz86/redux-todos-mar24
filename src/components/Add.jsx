import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

export default function Add() {
   const [text, setText] = useState('');
   
   const dispatch = useDispatch();

   const handleAddTodo = () => {

    dispatch(addTodo({id:Date.now(),text:text}));
    setText('');
   }
 return (
   <div>
       <h2>Add new Todo</h2>
       <div>
     <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
     <button onClick={handleAddTodo}>Add ToDo</button>
   </div>
</div>
 )
}

