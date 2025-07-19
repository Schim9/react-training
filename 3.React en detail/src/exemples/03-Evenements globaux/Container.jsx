import {useEffect} from 'react';

export default function Container () {
  useEffect (() => {
    const handleClick = event => console.log ('Clic!', event);
    window.addEventListener ('click', handleClick);
    // Cleanup effect: Cette fonction sera appelée lorsque le composant sera démonté
    return () => {
      window.removeEventListener ('click', handleClick);
    };
  }, []);

  return <div />;
}

