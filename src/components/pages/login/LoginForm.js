import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();


  // Behavior
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`)
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez-nous</h1>
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom..."
        required
      />
      <button>Accedez avotre espace</button>
    </form>
  );
}
