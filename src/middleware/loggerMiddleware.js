const loggerMiddleware = (store) => (next) => (action) => {
    
    console.log('Dispatching:', action);
    console.log('Current store ', store.getState());

    const result = next(action);  // Before the action is executed // before addingthe item in the array
    
    console.log('State after action:', store.getState());
    
    return result;
};
export default loggerMiddleware;

