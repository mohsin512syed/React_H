import { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT_VALUE":
            return { ...state, inputValue: action.payload };
        case "INPUT_NUM":
            return { ...state, num: action.payload };
        case "CLICK_ITEMS":
            return {
                ...state,
                items: [...state.items, { itemName: state.inputValue, quantity: state.num }],
                inputValue: "",
                num: 1
            };
        case "REMOVE":
            return {
                ...state,
                items:state.items.filter((_,index)=> index!== action.id)// _ is ka mtlb ya ha ka mujhy ya element nhi chaye is ki jga hum item bh likh skty hai ya javascript ma ak varibale hai    
            };
        case "INCREMENT":
            return{
              ...state,
              items:state.items.map((item,index)=>
                index===action.id?{...item , quantity:item.quantity+1}:item
              )
            };
        case "DECREMENT":
            return{
               ...state,
               items:state.items.map((item,index)=>
                index===action.id && item.quantity>1?{...item,quantity:item.quantity-1}:item
               )
            }
        default:
            return state;
    }
}
const initialState = {
    inputValue: "",
    num: 1,
    items: []
}
const Reducer2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Item Enter name and Quantity</h1>
            <input
                type="text"
                value={state.inputValue}
                onChange={(e) => dispatch({ type: "INPUT_VALUE", payload: e.target.value })}
                placeholder='Enter the item name'
            />
            <p> input value : {state.inputValue}</p>
            <input
                type="number"
                min="1"
                value={state.num}
                onChange={(e) => dispatch({ type: "INPUT_NUM", payload: Number(e.target.value) })}
                placeholder='enter the number' />
            <p> imput number : {state.num}</p>
            <button onClick={() => dispatch({ type: "CLICK_ITEMS" })}>submit</button>
            <h2>items</h2>
            <div>
                {state.items.map((item, index) => (
                    <div key={index}>
                        <p>Item name : {item.itemName} && quantity : {item.quantity} </p>
                        <button onClick={() => dispatch({ type: "REMOVE", id: index })}>Remove</button>
                        <button onClick={()=>dispatch({type:"INCREMENT",id:index})}>Increase Item Quantity</button>
                        <button onClick={()=>dispatch({type:"DECREMENT",id:index})}>Decrese Item Quantity</button>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Reducer2