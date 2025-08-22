import { createContext, useState } from 'react'
import {nanoid} from'nanoid'
export const PanierContext = createContext()

export default function PanierProvider(props) {
  // On définit le state qui sera partagé
  const [panier, setPanier] = useState([])
  // On définit un ensemble de fonctions qui seront exportées
  const cleanPanier = () => setPanier(previousPanier => [])
  const addInPanier = (element) => {
    setPanier(previousPanier => {
       previousPanier.push({id: nanoid(), value: element})
       return previousPanier
    })
  }
  const deleteFromPanier = (element) => setPanier(previousPanier => previousPanier.filter(item => item.id !== element.id))

  return (
    <PanierContext.Provider value={{ panier, cleanPanier, addInPanier, deleteFromPanier }}>
      {props.children}
    </PanierContext.Provider>
  )
}