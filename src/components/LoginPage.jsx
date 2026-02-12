import { useState } from "react";

export default function LoginPage() {
  // State
  const [inputValue, setInputValue] = useState("");

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("")
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Display (render)

  return (
    <div>
      <h1>Welcome to the Crazee Burger</h1>
      <br/>
      <h2>Login</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name..."
          requiredg
        />
        <button>Accedez a votre espace</button>
      </form>
    </div>
  );
}
