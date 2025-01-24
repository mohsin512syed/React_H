import { useState , useRef } from 'react'
const Index = () => {
    const [count, setCount] = useState(0)
    let a = useRef(0)
    const BtnFunc = () => {
        return (setCount(count + 1),  a.current=a.current+1);
    }
    return (
        <>
            <h1>{count}</h1>
            <h2>and the value of a is {a.current}</h2>
            <button onClick={BtnFunc}> click here</button>
        </>

    )
}
export default Index