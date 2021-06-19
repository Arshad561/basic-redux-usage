const redux = require('redux');

// initial state
const initailState = {
  counter: 0
};

const counterReducer = (state = initailState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }
  return state;
}

// creating the store using reducer function
// so that whenever a action is dispatched, the reducer function will get executes automatically
// redux.createStore executes the reducer function for initialization of state for the first time
const store = redux.createStore(counterReducer);

// creating a subscriber function
// whenever the state changes this function executes automatically
const counterSubscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore);
}

// subscribing to the store using our subscriber function
store.subscribe(counterSubscriber);

// dispatching the action
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});