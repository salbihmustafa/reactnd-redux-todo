function createStore() 
{
    //The store has four parts
    //1. Manage state
    //2. Get state
    //3. Listen to changes on the state
    //4. Update the state

    let state //#1 holds the entire state

    const getState = () => state //#2 able to get state with this method

    //Whenever createStore() is invoked, it will return state by invoking getState
    return
    {
        getState //Property
    }
}