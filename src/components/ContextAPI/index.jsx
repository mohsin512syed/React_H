import { createContext } from 'react'

export const BioContext = createContext()

 export const BioProvider = ({ children }) => {
    const age = 24;
    const name = "mohsin";
    /*in the cotextAPI three main functions are proide createContext  , proider and useContext    */
    return (
        <BioContext.Provider value={{ age: age, name: name }}>
            {children}
        </BioContext.Provider>
    )
}
