import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../Theme";

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
      <div className="container-text">
        <h1>
          Bienvenue chez-nous
        </h1>
        <h2>Connectez-vous</h2>
      </div>

      <div className="cta-container">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prenom..."
          required
        />
        <button style={{ backgroundColor: "orange" }}>
          Accedez avotre espace
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  border: 1px solid red;

  .container-text {
    background-color: grey;
    border: 1px solid ${theme.colors.tertiary};

    h1 {
      border: 1px solid red;
      color: ${theme.colors.tertiary};
    }
    h2 {
      color: ${theme.colors.tertiary};
      border: 1px solid blue;
    }
  }

  .cta-container {
    background-color: pink;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      border: 1px solid yellow;
    }

    button {
      border: 1px solid purple;
    }
  }
`;

/** 4 methodes poour ajouter du style a un composant
 *
 * 1. inline style
 * 2. object style
 * 3. modules css (avec className)
 * 4. global style (index.css)
 */
