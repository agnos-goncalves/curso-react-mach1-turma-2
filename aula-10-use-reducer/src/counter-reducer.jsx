export const CounterInitialState = {
  counter: 0,
};

function CounterReducer(state, action) {
  switch (action.type) {
    case "ADD_COUNTER":
      return { counter: state.counter + 1 };
    case "REMOVE_COUNTER":
      return { counter: state.counter - 1 };
    case "SET_COUNTER":
      return { counter: action.payload };
    default:
      return CounterInitialState;
  }
}

export default CounterReducer;
