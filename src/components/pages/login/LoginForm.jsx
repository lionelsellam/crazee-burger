import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // Display (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Welcome to the Crazee Burger !</h1>
      <br />
      <h2>Login</h2>

      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Enter your name..."
        requiredg
      />
      <button>Accedez a votre espace</button>
    </form>
  );
}
