# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
const memorizedValue = useMemo(()=>{
    return computedValue
},[dependencies])
.useMemo is a React Hook used for memorization ,
.Memorization is a technique to optimize performance by caching the results of expensice function calls,
.Use it when you wan to prevent unnecessory re-execution of a function on every render
.useCallback is a react hook use for function memorization=> during the component render create a instance the useCall back hook memorized the instance and avoiding unnecessory re-execution
.Controlled and Uncrotrolled components => controlled components consist of three parts event handler  , state update and state management or other side the uncontrolled components managed with the help of dom ,
.UseRef is sa react hook that lets your ref and dont need to the component rendering , 
.UseRef function component ma mutale reference bnany ka lye istmal hota hai , 