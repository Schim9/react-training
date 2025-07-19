export default function Card({libelle}) {
  console.log ('Render du composant Card');
  return (
    <div>
      <h1>Ma carte</h1>
      <p>{libelle}</p>
    </div>
  );
}
