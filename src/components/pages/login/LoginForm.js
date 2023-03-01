import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Behavior
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const titreH2Style = {
    backgroundColor: "blue",
    color: "white",
    fontSize: 15,
  };

  // Render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1 style={{ color: "red" }}>Bienvenue chez-nous</h1>
      <h2 className="bonbon">Connectez-vous</h2>
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

/** 4 methodes poour ajouter du style a un composant
 *
 * 1. inline style
 * 2. object style
 * 3. modules css (avec className)
 * 4. global style (index.css)
 */
