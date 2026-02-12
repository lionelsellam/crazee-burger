import React, { useState } from "react";

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");

  // Comportements

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
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
