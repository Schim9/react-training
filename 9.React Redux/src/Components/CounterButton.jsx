import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "../reducers/counter"

export default function CounterButton() {

    // useDispatch nous permet d'envoyer des actions définie dans le reducer
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(increment({value: 10}))} > INCREMENT </button>
            <button onClick={() => dispatch(decrement())} > DECREMENT </button>
            <button onClick={() => dispatch(reset())} > RESET </button>
        </>
    )
}

