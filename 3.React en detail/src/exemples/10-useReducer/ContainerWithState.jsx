import {useState} from 'react';

export default function ContainerWithState () {
  const [state, setState] = useState (0);

  function handleIncrement () {
    setState (state + 1);
  }
  function handleDecrement () {
    setState (state - 1);
  }
  function handleDivideBy10 () {
    setState (state / 10);
  }
  function handleMultiplyBy10 () {
    setState (state * 10);
  }

  return (
    <div>
      <h1>Compteur: {count}</h1>
      <button onClick={() => handleIncrement()}>
        Incrementer
      </button>
      <button onClick={() => handleDecrement()}>
        Decrement
      </button>
      <button onClick={() => handleDivideBy10()}>
        Divide by 10
      </button>
      <button onClick={() => handleMultiplyBy10()}>
        Multiply by 10
      </button>
    </div>
  );
}
