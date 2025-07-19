import {useState, useMemo} from 'react';

export default function Calcul () {
  const [valeurHT, setValeurHT] = useState (0);

  function calculTTC () {
    console.log ('Le calcul est fait ici');
    return valeurHT * 1.2;
  }

  // Le calcul sera réalisé à chaque rendu du composant
  // car il n'est pas mis en cache.
  const calculCouteux = calculTTC ();
  
  // Le tableau de dépendances est vide, donc le calcul ne sera fait qu'une seule fois
  // et le résultat sera mis en cache.
  const calculCouteuxWithCache = useMemo(() => calculTTC (), []);

  // Le tableau de dépendances contient valeurHT, donc le calcul sera refait
  // à chaque fois que valeurHT change.
  const calculCouteuxWithCacheEtSurveillance = useMemo (() => calculTTC (), [valeurHT]);


  // Dans cet exemple:
  // calculCouteux sera recalculé à chaque rendu du composant
  // calculCouteuxWithCache sera calculé une seule fois, et mis en cache
  // calculCouteuxWithCacheEtSurveillance sera recalculé à chaque fois que valeurHT change
  return (
    <div>
      <h1>Calcul de la tva</h1>
      <input value={valeurHT} onChange={e => setValeurHT (e.target.value)} />
      <p>Le prix TTC pour {valeurHT} est {calculCouteux}</p>
      {/* <p>Le prix TTC pour {valeurHT} est {calculCouteuxWithCache}</p> */}
      {/* <p>Le prix TTC pour {valeurHT} est {calculCouteuxWithCacheEtSurveillance}</p> */}
    </div>
  );
}
