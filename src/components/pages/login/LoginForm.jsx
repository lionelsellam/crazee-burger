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
      <hr />
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

  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1{
    color: white;
    font-size: 48px;
  }

  h2{
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

`;
