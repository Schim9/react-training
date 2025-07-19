import { useState } from "react"

export default function Tabs() {

    const [activeTab, setActiveTab] = useState(0)
    const tabs = [
        { id: 0, label: "Tab 1", content: "Content of Tab 1" },
        { id: 1, label: "Tab 2", content: "Content of Tab 2" },
        { id: 2, label: "Tab 3", content: "Content of Tab 3" },
    ]   
  return (
    <div 
        // mx-auto: pour centrer horizontalement
        // rounded: pour arrondir les coins
        // border: pour ajouter une bordure
        // border-secondary: pour une couleur de bordure grise
        // border-1: pour une bordure de 1 unité
        // container: pour centrer le contenu
        className="mx-auto rounded border border-secondary border-1 container" 
        // On ajoute une balise style car bootstrap ne permet pas de le faire directement
        // maxWidth: pour limiter la largeur à 36rem
        // minHeight: pour limiter la hauteur à 250px
        style={{ maxWidth: '36rem', minHeight: '250px'}}
    >
       <div 
            // d-flex: pour utiliser flexbox
            // w-100: pour une largeur de 100%
            // p-2: pour un padding de 2 unités
            // border-bottom: pour une bordure en bas
            // border-secondary: pour une couleur de bordure grise
            className="d-flex w-100 p-2 border-bottom border-secondary"
        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    // p-2: pour un padding de 2 unités
                    // flex-grow-1: pour que le bouton prenne toute la largeur disponible
                    // bg-blue-500: pour une couleur de fond bleue
                    // text-secondary: pour une couleur de texte grise
                    className={`p-2 flex-grow-1 ${activeTab === tab.id ? 'bg-blue-500 text-gray' : 'text-secondary'}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
        <div className="p-4">
            {tabs[activeTab].content}
        </div>
    </div>
  )
}