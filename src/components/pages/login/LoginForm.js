import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  // Render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>
          Bienvenue chez-nous
        </h1>
        <h2>Connectez-vous</h2>
      </div>

      <div>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prenom"
          required
        />
        <button style={{ backgroundColor: "orange" }}>
          Accedez a mon espace
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  background-color: green;
`;