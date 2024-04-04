import React from 'react'
import {  useDispatch } from 'react-redux'
import {removeTodo} from '../features/todoSlice';
export default function Row({item}) {
    const {id, text} = item;
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTodo({id:id}))
    }

 return (
   <div>
       <h3>{text}</h3>
       <button onClick={handleDelete}>Remove</button>
   </div>
 )
}


