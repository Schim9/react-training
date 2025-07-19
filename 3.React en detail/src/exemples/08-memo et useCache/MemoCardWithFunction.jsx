import {memo} from 'react';
export default memo (function MemoCardWithFunction({libelle, callback}) {
  console.log ('Render du composant MemoCardWithFunction');
  callback()
  return (
    <div>
      <h1>Ma mémo carte</h1>
      <p>{libelle}</p>
    </div>
  );
});
