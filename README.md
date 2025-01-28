
1.useState is a React Hook that lets you add a state variable to your component. const [state, setState] = useState(initialState) useState(initialState) set functions, like setSomething(nextState).

2.In React, useEffect is a hook that allows you to perform side effects in functional components. Side effects can include things like data fetching, subscriptions, DOM manipulations, timers, or logging.

3.useMemo is a React Hook used for memorization ,
Memorization is a technique to optimize performance by caching the results of expensice function calls,
Use it when you wan to prevent unnecessory re-execution of a function on every render.

4.useCallback is a react hook use for function memorization=> during the component render create a instance the useCall back hook memorized the instance and avoiding unnecessory re-execution

5.UseRef is sa react hook that lets your ref and dont need to the component rendering 
UseRef function component ma mutale reference bnany ka lye istmal hota hai .

6.Context API in React is used to share data across the components without passing the props manually through every level. It allows to create global state of data providing global access to all the components.

7.In React, useReducer is a hook used for state management, especially when the state logic is complex or when managing multiple state values. It is an alternative to useState but is designed for more advanced scenarios.