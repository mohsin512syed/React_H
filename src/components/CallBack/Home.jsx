import { useCallback, useState } from 'react'
import Button from './Button';
const Home = () => {
    const [count, setCount] = useState(0)
    // const increment = () => {
    //     console.log("increment button ");
    //     setCount(prevCount => prevCount + 1);
    // };
    // const decrement = () => {
    //     console.log("decrement button ");
    //     setCount(prevCount => prevCount - 1);
    // }
    const increment=useCallback(()=>{
        console.log("increment button ");
        setCount(prevCount => prevCount + 1);
    },[])
    const decrement=useCallback(()=>{
        console.log("increment button ");
        setCount(prevCount => prevCount + 1);
    },[])
    return (
        <>
            <div>
                <h1>Count:{count}</h1>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
        </>
    )


}
export default Home;