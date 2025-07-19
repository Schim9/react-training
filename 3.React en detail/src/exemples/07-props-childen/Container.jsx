import Child from './Child';

export default function Container () {
  return (
    <div>
      { /* Je peux afficher les props telles qu'elles sont passées au composant */}
      <Child txt={'test'} />
      { /* Je peux afficher les enfants du composant */}
      <Child txt={'test2'}>
        <h1>Je suis un enfant</h1>
        <p>Je suis un enfant</p>
      </Child>
    </div>
  );
}
