function Children({ id, changeState }) {
    console.log(id)
    return (
        <div>
            <p>Je suis l'élement {id}</p>
            <button className='btn btn-primary' onClick={() => changeState('Nouveau label')}>Changer le label</button>
        </div>
    )
}
export default Children