function createStore() 
{
    //The store has four parts
    //1. Manage state
    //2. Get state
    //3. Listen to changes on the state
    //4. Update the state

    let state; //holds the entire state which is a variable
    let listeners = []; //Array of listeners

    const getState = () => state; //able to get state with this method by returning the state.

    //Listener to let the user know when the state changes
    const subscribe = (listener) => {
        listeners.push(listener) //Push what is being passed from subscribe into listeners array
        return () => {
            listeners = listeners.filter((l) => l !== listener) //Filter out original listener that was passed in
        }
    }

    //Whenever createStore() is invoked, it will get a object back
    return
    {
        getState, //Property that the users can see
        subscribe
    }
}
//User
const store = createStore(); //Invoke createStore()
