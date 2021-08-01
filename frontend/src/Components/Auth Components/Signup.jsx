import React from "react";
import {
  Container,
  Header,
  InputContainer,
  InputTag,
  StyledEmail,
  StyledInput,
} from "Components/Auth Components/Shared";
import { Spacer } from "Components/Shared";

const Signup = () => {
  return (
    <Container>
      <Header>Sign Up</Header>
      <InputContainer />
      <InputContainer>
        <InputTag>
          <StyledEmail />
        </InputTag>
        <StyledInput />
      </InputContainer>
      <Spacer />
      <Spacer />
    </Container>
  );
};

export default Signup;
