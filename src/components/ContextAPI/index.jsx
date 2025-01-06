import { createContext } from 'react'

export const BioContext = createContext()

 export const BioProvider = ({ children }) => {
    const age = 24;
    const name = "mohsin";
    return (
        <BioContext.Provider value={{ age: age, name: name }}>
            {children}
        </BioContext.Provider>
    )
}
