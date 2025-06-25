import { useRef } from "react";

function UseRefExample() {

    // On crée une référence vers l'élément dont la classe est "my-paragraphe"
    const refToParagraphWithQuerySelector = document.querySelector('.paragraphe');
    // On crée une référence avec useRef, qui est une fonction de React
    const refToParagraph = useRef("")


    // ATTENTION: document.querySelector('.paragraphe') retourne le premier élément du DOM
    //  qui a la classe "paragraphe"
    return <div>
        <p className={'paragraphe'}>Lorem ipsum dolor sit amet.</p>
        <p ref={refToParagraph}>Lorem ipsum dolor sit amet.</p>
    </div>


}
export default UseRefExample