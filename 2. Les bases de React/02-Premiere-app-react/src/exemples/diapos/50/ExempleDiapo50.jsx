// Dans cet exemple, nous allons faire réagir notre composant à un clic sur un bouton.

function ExempleDiapo50() {
    return (
        <div>
            <h1>React training</h1>
            <button
                className='btn btn-primary'
                onClick={() => console.log('on a cliqué sur le bouton')}
            >Click Me</button>
        </div>
    )
}
export default ExempleDiapo50