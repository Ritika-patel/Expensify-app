import { createStore } from "redux";


//Action generator
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setBy} = {}) => ({
    type: 'SET',
    setBy
})

const ResetCount = () => ({
    type: 'RESET',
})

//REDUCERS
//1- Reducers are pure function
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
    
      return {
        count: state.count + action.incrementBy,
      };


    case "DECREMENT":
     
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.setBy,
      };

    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



//INCREMENT
store.dispatch(incrementCount({ incrementBy: 5 }));

//RESET
store.dispatch(ResetCount());

//DECREMENT
store.dispatch( decrementCount({ decrementBy: 1000}));

//SET
store.dispatch(setCount({ setBy: 500 }));

