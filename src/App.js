// App.js
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import CarContext from "./CarContext";
import "./App.css";

function App() {
  const [brand] = useState("Ford");
  const [model] = useState("Escort");
  const [color, setColor] = useState("");

  return (
    <CarContext.Provider value={{ brand, model, color, setColor }}>
      <div className="App">
        <Header />
        <Main />
        <Form />
      </div>
     
    </CarContext.Provider>
  );
}

export default App;