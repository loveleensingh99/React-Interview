import React,{useReducer} from "react";

const initialState = {
  count: 0,
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  return (
    <>
      <div className="">REDUCER</div>
      <div className="">{state.count}</div>

      <button onClick={()=>dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={()=>dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={()=>dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default Reducer;
// useReducer is used to manage complex state logic in functional components, especially when multiple actions or states are involved.