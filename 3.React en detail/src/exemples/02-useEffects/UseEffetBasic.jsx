import { useEffect, useState } from "react";

function UseEffetBasic() {
  const [count, setCount] = useState(0);
  useEffect(() => { console.log('Après la première mise à jour du DOM'); }, []);
  useEffect(() => { console.log('Après chaque mise à jour du DOM'); });
  useEffect(() => { console.log('Dès que le compteur change'); }, [count]);
  return (
    <h1>
      Le hook UseEffect
      <button onClick={() => setCount(count + 1)}>
        Compteur : {count}
      </button>
    </h1>
  );
}
export default UseEffetBasic;
