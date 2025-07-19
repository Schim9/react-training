import useCallApi from "./hook/useCallApi";

export default function Container() {

    const [personneData, loading, error] = useCallApi()
  return (
    <div>
        <h1>Exercice custom hook</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {personneData && (
          <div>
            <img src={personneData.picture.large} alt="photo" />
            <p>{`${personneData.name.first} ${personneData.name.last}`}</p>
          </div>
        )}
        <button onClick={() => window.location.reload()}>Rafraichir</button>    
    </div>
  )
}