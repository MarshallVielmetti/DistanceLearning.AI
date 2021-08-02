import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Header,
  InputContainer,
  InputTag,
  StyledInput,
  BackLink,
  BackContainer,
  BackArrow,
  ActionContainer,
  ActionButton,
  ActionRows,
  ForgotPassword,
  ForgotSignin,
} from "Components/Auth Components/Shared";
import { Spacer } from "Components/Shared";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const sendToken = `Bearer ${token}`;
    }
  });

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
    }
  };
  return (
    <Container>
      <BackContainer>
        <BackLink to="/">
          <BackArrow />
        </BackLink>
      </BackContainer>

      <Header>Sign In</Header>
      <InputContainer>
        <InputTag />
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputTag />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Spacer />
      <ActionContainer>
        <ActionRows>
          <Spacer num="3" />
          <ForgotPassword to="/reset-password">Forgot Password?</ForgotPassword>
          <Spacer num="1" />
          <ActionButton onClick={handleSubmit}>Sign In</ActionButton>
          <Spacer num="3" />
        </ActionRows>
        <Spacer />
        or
        <ActionRows>
          <Spacer />
          <ForgotSignin to="/sign-up">Sign Up</ForgotSignin>
          <Spacer />
        </ActionRows>
        <Spacer />
      </ActionContainer>
      <Spacer />
    </Container>
  );
};

export default Signin;
