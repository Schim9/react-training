import ModalContent from "./ModalContent"
import { useState } from "react"
import {createPortal} from "react-dom"

export default function ModalButton() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <button 
                // bg-secondary : Pour une couleur de fond.
                // px-4 : Pour un padding horizontal.
                // py-2 : Pour un padding vertical.
                // rounded : Pour des coins arrondis.
                className=" bg-secondary px-4 py-2 rounded"
                onClick={() => setShowModal(true)}>Open Modal
            </button>
            {showModal && 
            createPortal(
            <ModalContent onClose={() => setShowModal(false)}></ModalContent>,
            document.body
            )}
        </>
    )
}