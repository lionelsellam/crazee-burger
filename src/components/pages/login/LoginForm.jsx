import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import "styled-components";
import styled from "styled-components";

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Welcome to the Crazee Burger !</h1>
      <br />
      <h2>Login</h2>

      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Enter your name"
        required
      />
      <button>Accedez a mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
background: green;
display: flex;
flex-direction: column;

`