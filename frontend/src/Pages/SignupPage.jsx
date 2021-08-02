import React from "react";
import styled from "styled-components";
import { Spacer } from "Components/Shared";
import Signup from "Components/Auth Components/Signup";
import { SignupPageContainer } from "Components/Auth Components/Shared";

const SignupPage = () => {
  return (
    <SignupPageContainer>
      <Spacer />
      <Signup />
      <Spacer />
    </SignupPageContainer>
  );
};

export default SignupPage;
