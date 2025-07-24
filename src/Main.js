import React, { useContext } from "react";
import CarContext from "./CarContext";

function Main() {
    const { brand, model,color } = useContext(CarContext);

    return (
        <main>
            <ul>
                <li>Marque: {brand}</li>
                <li>Modèle: {model}</li>
                <li>Couleur: {color}</li>
            </ul>
        </main>
    );
}

export default Main;