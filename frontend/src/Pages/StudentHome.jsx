import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Spacer } from "Components/Shared";
import JoinSession from "Components/Join Session/JoinSession";
import GetPayload from "Components/Protected Route/GetPayload";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TitleText = styled.h1`
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 5rem;
  color: black;
  margin-left: 5%;
`;

const SignOutButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.offWhite};
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 3rem;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: ${(props) => props.theme.darkOffWhite};
  }
`;

const StudentHome = () => {
  const history = useHistory("");

  const handleSignout = () => {
    sessionStorage.removeItem("token");
    history.push("/sign-in");
  };

  const email = GetPayload(sessionStorage.getItem("token")).email.split("@")[0];

  return (
    <Container>
      <ColumnContainer>
        <TitleText>Welcome, {email}</TitleText>
        <Spacer />
        <SignOutButton onClick={handleSignout}>Sign Out</SignOutButton>
        <Spacer num="3" />
      </ColumnContainer>
      <Spacer />
      <ColumnContainer>
        <Spacer num="3" />
        <JoinSession />
        <Spacer num="2" />
      </ColumnContainer>
    </Container>
  );
};

export default StudentHome;
