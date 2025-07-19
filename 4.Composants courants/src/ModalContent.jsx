export default function ModalContent({onClose}) {
  return (
    <div
      // onClick={closeModal} pour fermer le modal en cliquant sur le fond
      onClick={onClose}
        // position fixe: pour que le modal soit toujours au même endroit
        // top-0 : pour le placer en haut de la page
        // start-0 : pour le placer à gauche de la page
        // bottom-0 : pour le placer en bas de la page
        // end-0 : pour le placer à droite de la page
        // d-flex : pour utiliser flexbox
        // align-items-center : pour centrer le contenu verticalement
        // justify-content-center : pour centrer le contenu horizontalement
        // bg-black : pour une couleur de fond noire
        // bg-opacity-50 : pour une opacité de 50%
      className="position-fixed top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center bg-black bg-opacity-50"
    >
      <div
        // pour ne pas fermer le modal en cliquant sur le contenu
        onClick={e => e.stopPropagation ()} 
        // bg-light : pour une couleur de fond claire
        // p-5 : pour un padding de 5 unités
        // rounded-3 : pour des coins arrondis
        // position-relative : pour que le bouton de fermeture soit positionné par rapport au contenu
        className="bg-light p-5 rounded-3 position-relative"
      >
        <button 
            onClick={onClose} 
            // btn : pour un bouton
            // btn-danger : pour une couleur de fond rouge
            // position-absolute : pour que le bouton soit positionné par rapport au contenu
            // top-0 : pour le placer en haut de la page
            // end-0 : pour le placer à droite de la page
            // m-2 : pour une marge de 2 unités
            className="btn  btn-danger position-absolute top-0 end-0 m-2"
        >X</button>
        Contenu de la modale
      </div>
    </div>
  );
}
