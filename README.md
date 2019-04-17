# reactnd-redux-todo

Simple template by creating a store. The store has four parts.

# 1. The state

Managing the state.

# 2. Getting the state

Create a get state function to get the current state.

# 3. Listening for changes on the state

Check to see if there are any changes to the state.

# 4. Updating the state

Update the state rules
Number 1 rule - "Only an event can change the state of the store."

Example - Let's say we are building a todo application, an event that can change the state is if the user adds an item to the list.

When an event takes place in a Redux application, we use a plain JavaScript object to keep track of what the specific event was. The object is called an Action.

#All actions must have a type property

Actions can look like so:

{
    type: "ADD_TODO"
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
}

{
    type: "REMOVE_TODO"
    id: 0
}

const clearErrors = {
  type: CLEAR_ERRORS
};

const addSeven = {
  type: 'ADD_NUMBER',
  number: 7
};

# Action Creators are functions that create/return action objects. For example:

const addItem = item => ({
  type: ADD_ITEM,
  item
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post: post
}); 
