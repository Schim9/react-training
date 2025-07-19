import { useState } from 'react';
import Carte from './Carte';

function UseEffectAdvanced () {

  const [displayCard, setDisplayCard] = useState(false);

  return (
    <div>
      <h1>Le hook UseEffect</h1>
      <button onClick={() => setDisplayCard(!displayCard)}>Carte ?</button>
      {displayCard && <Carte />}
    </div>
  );
}
export default UseEffectAdvanced;
