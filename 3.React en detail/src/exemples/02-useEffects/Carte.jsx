import { useState, useEffect } from "react"
import "./Carte.css";

function Carte() {

    useEffect(() => {
        console.log("Carte affichée !");

        // Cleanup effect: Cette fonction sera appelée lorsque le composant sera démonté
        return () => {
            console.log("Carte retirée !");
        };
    });
    const suit = "♠";
    const value = "A";
    return (
        <div className="card">
          <div className="card-content">
            <div className="card-top">
              <span className="card-value">{value}</span>
              <span className="card-suit">{suit}</span>
            </div>
            <div className="card-center">
              <span className="card-suit-large">{suit}</span>
            </div>
            <div className="card-bottom">
              <span className="card-value">{value}</span>
              <span className="card-suit">{suit}</span>
            </div>
          </div>
        </div>
      );
}
export default Carte