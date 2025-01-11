import  { useMemo } from 'react'

const complexCalculation = () => {
    const calculation = () => {
        let sum = 0 ;
        for (let i = 0; i < 1000000; i++) {
            sum += 1;
        }
        return sum;
    }
    const cal = useMemo(() => calculation(), [])
    return <p>{cal}</p>
}
export default complexCalculation;