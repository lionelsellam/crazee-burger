import React, { useState } from "react";

export default function LoginPage() {
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
    <div>
      <h1>Bienvenue chez-nous</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prenom..."
          required
        />
        <button>Accedez avotre espace</button>
      </form>
    </div>
  );
}
