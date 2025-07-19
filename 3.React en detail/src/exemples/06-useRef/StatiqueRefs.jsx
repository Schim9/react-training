import {useRef} from 'react';

export default function StatiqueRefs () {
  const paragrapheRefs = useRef ([]);

  function addParagrapheRefs (el) {
    if (el && !paragrapheRefs.current.includes (el)) {
      paragrapheRefs.current.push (el);
    }
    console.log (paragrapheRefs.current);
  }

  return (
    <div>
      <p ref={addParagrapheRefs}> </p>
      <p ref={addParagrapheRefs}> </p>
      <p ref={addParagrapheRefs}> </p>
      <p ref={addParagrapheRefs}> </p>
    </div>
  );
}
