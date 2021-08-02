import React, { useState } from "react";
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
  TeacherCheckbox,
  ForgotSignin,
} from "Components/Auth Components/Shared";
import { Spacer } from "Components/Shared";

const Signup = () => {
  const handleSubmit = () => {
    console.log(email);
    console.log(password);
    console.log(verifyEmail);
    console.log(verifyPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(true);

  return (
    <Container>
      <BackContainer>
        <BackLink to="/">
          <BackArrow />
        </BackLink>
      </BackContainer>

      <Header>Sign Up</Header>
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
          type="email"
          placeholder="Verify Email"
          value={verifyEmail}
          onChange={(e) => setVerifyEmail(e.target.value)}
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
      <InputContainer>
        <InputTag />
        <StyledInput
          type="password"
          placeholder=" Verify Password"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
      </InputContainer>
      <ActionContainer>
        <Spacer />
        <ActionRows>
          <Spacer num="3" />
          <TeacherCheckbox
            type="checkbox"
            checked={isTeacher}
            onChange={(e) => setIsTeacher(!isTeacher)}
          />
          Teacher?
          <Spacer num="1" />
          <ActionButton onClick={handleSubmit}>Create Account</ActionButton>
          <Spacer num="3" />
        </ActionRows>
        <Spacer />
        or
        <ActionRows>
          <Spacer />
          <ForgotSignin to="/sign-in">Sign In</ForgotSignin>
          <Spacer />
        </ActionRows>
        <Spacer num="2" />
      </ActionContainer>
      <Spacer />
    </Container>
  );
};

export default Signup;
