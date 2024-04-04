import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice';
import loggerMiddleware from "../middleware/loggerMiddleware";

// This will be retrieved by the component to interact with the state
export const store = configureStore({
    // THis is where you define all the reducer / slice / configuration of a redux project
    reducer:{
        todos:todoReducer
    },
    // whatever middleware that we have, override it by concatenating new middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware) 


})
