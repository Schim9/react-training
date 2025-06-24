export default function Element({ numero, nom }) {
    console.log(numero, nom)
    return (
        <li>
            Bonjour je suis l'élement {numero} et je m'appelle {nom}
        </li>
    )
}