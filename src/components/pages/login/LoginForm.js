import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");

  // Behavior
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
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
      <Link to="/order">Vers OrderPage</Link>
    </form>
  );
}
