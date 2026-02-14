import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Comportements

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const fruit = {
    name: "abricot",
    origin: "France",

  }

  const titleH2Style = {backgroundColor: "green", color:"white", fontSize: 20 }

  // Display (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1 style={{color: "red" }}>Welcome to the Crazee Burger !</h1>
      <br />
      <h2 style={titleH2Style}>Login</h2>

      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Enter your name..."
        required
      />
      <button>Accedez a votre espace</button>
    </form>
  );
}

/* methods for add style to composant 
* 1. inline style 
* 2. object style
* 3. modules css ( avec class name )
* 4. global style ( index.css )
*/
