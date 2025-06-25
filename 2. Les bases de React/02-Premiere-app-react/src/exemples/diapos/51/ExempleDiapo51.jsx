// Dans cet exemple, nous allons faire réagir notre composant à un clic sur un bouton.
// Mais la fonction qui sera appelée lors du clic sur le bouton sera définie en dehors du template.

function ExempleDiapo51() {

    function printSomething() {
        console.log('on a cliqué sur le bouton');
    }

    return (
        <div>
            <h1>React training</h1>
            {/* Première façon d'appeler la fonction */}
            <button
                className='btn btn-primary'
                onClick={printSomething}
            >Click Me</button>

            {/* Deuxième façon d'appeler la fonction */}
            <button
                className='btn btn-secondary'
                onClick={() => printSomething()}
            >Click Me</button>
        </div>
    )
}
export default ExempleDiapo51