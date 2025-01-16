import { } from 'react'
const Button = ({ onClick , children }) => {
    console.log(`Rendereing button ${children}`)
    return (
        <div>
            <button
                style={{
                    backgroundColor: children === 'Increment' ? 'green' : 'red',
                }}
                onClick={onClick}>
                {children}
            </button>
        </div>

    )
}
export default Button;