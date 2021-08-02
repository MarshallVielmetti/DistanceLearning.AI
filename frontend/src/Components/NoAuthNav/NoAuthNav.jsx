import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  NavContainer,
  NavLink,
  NavText,
  SpecialLink,
} from "Components/Shared/NavComponents";

import { Spacer } from "Components/Shared";

const NoAuthNav = () => {
  return (
    <NavContainer>
      <NavLink to="/">
        <NavText>Home</NavText>
      </NavLink>
      <NavLink to="/About">
        <NavText>About</NavText>
      </NavLink>
      <Spacer />
      <NavLink to="/sign-in">
        <NavText>Sign In</NavText>
      </NavLink>
      <SpecialLink to="/sign-up">
        <NavText>Sign Up</NavText>
      </SpecialLink>
    </NavContainer>
  );
};

export default NoAuthNav;
