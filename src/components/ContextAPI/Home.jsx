import { useContext } from 'react'
import { BioContext } from '.'
export const Home = () => {
    const value = useContext(BioContext)
    return (
    <h1>hello Context API my name is {value.name} and my age is {value.age} </h1>
    )
}