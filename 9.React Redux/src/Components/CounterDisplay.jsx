import { useSelector } from 'react-redux';

export default function CounterDisplay() {
    // useSelector est un hook qui permet de selectionner tout ou une partie du store redux
    // Ici on selectionne la partie "counter" du store, et on extrait la valeur "count"
    const { count } = useSelector((state) => state.counter);

    return (
        <h1>Counter: {count}</h1>
    )
}