import { useState } from 'react'
import ComplexCalculation from './ComplexCalculation';

const Memo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <ComplexCalculation />
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </div>
        </>
    )
}
export default Memo;