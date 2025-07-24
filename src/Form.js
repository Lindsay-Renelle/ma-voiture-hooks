import React, { useContext} from "react";
import CarContext from "./CarContext";


function Form() {
    const { color, setColor } = useContext(CarContext);
  
    const handleChange = (e) => {
      setColor(e.target.value);
    };
  
    return (
      <form>
        <label htmlFor="selectColor">Choisissez la couleur</label><br />
        <select id="selectColor" value={color} onChange={handleChange}>
          <option value="">-- Sélectionnez --</option>
          <option value="Noir">Noir</option>
          <option value="Blanc">Blanc</option>
          <option value="Bleu">Bleu</option>
          <option value="Rouge">Rouge</option>
        </select>
      </form>
    );
  }
  
  export default Form;