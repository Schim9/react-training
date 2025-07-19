import Calcul from './Calcul';
import {useState} from 'react';

export default function Container () {
  // state pour forcer le render du composant parent
  const [count, setCount] = useState (0);
  return (
    <div>
      <Calcul />
      <button onClick={() => setCount(count+1)}>Refresh</button>
    </div>
  );
}
