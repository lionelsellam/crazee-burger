import React from "react";
import styled from "styled-components";
import Logo from "../Reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  // Render
  return (
    <LoginPageStyled>
      <Logo/>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
