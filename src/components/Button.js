import {useContext} from 'react'
import CounterContext from '../CounterContext'

const Button = ({type, label}) => {
    const [counter, dispatch] = useContext(CounterContext) // highlight-line
    return (
        <button onClick={() => dispatch({type})}>
            {label}
        </button>
    )
}

export default Button