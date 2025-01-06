import { useReducer } from 'react'
const Reducer1 = () => {
    const reducer =(state , action)=>{
        console.log(state,action);
        if(action.type==="INCREMENT"){
            return state + 1;
        }
        if(action.type==="DECREMENT"){
            return state - 1;
        }
    }
    const [state, dispatch] = useReducer(reducer, 0)
    return (
      <div>
        <h1>useRducer hook</h1>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>
      </div>

    )
};
export default Reducer1;