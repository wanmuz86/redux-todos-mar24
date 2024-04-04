import { createSlice } from '@reduxjs/toolkit';

// A slice is a configuration file to use redux  in a project
const todoSlice = createSlice({
    // name of the configuration file
    name:'todos',
    // all the states and it's initial value
    initialState: {todos:[]},
    // the methods that will change the state
    reducers : {
        addTodo: (state, action) => {

            [...state, action.payload]; // Add an object into the todos state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo=> todo.id !== action.payload.id);

        }

    }
})
// Later when we call the method from components, we will call the method that we export here
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer; // todoReducer)