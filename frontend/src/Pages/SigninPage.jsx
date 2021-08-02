import React from "react";
import { Spacer } from "Components/Shared";
import Signin from "Components/Auth Components/Signin";
import { SignupPageContainer } from "Components/Auth Components/Shared";

const SignupPage = () => {
  return (
    <SignupPageContainer>
      <Spacer />
      <Signin />
      <Spacer />
    </SignupPageContainer>
  );
};

export default SignupPage;
