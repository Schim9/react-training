import {memo} from 'react';
// Avec le hook memo, on peut mémoriser un composant dans le cache
export default memo (function MemoCard({libelle}) {
  console.log ('Render du composant MemoCard');
  return (
    <div>
      <h1>Ma mémo carte</h1>
      <p>{libelle}</p>
    </div>
  );
});
