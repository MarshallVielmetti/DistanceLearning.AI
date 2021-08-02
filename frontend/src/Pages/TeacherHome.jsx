import React from "react";
import CreateSession from "Components/Create Session/CreateSession";
import styled from "styled-components";
import { Spacer } from "Components/Shared";

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

const TeacherHome = () => {
  return (
    <Container>
      <ColumnContainer>
        <TitleText>Welcome, {"Name"}</TitleText>
      </ColumnContainer>
      <Spacer />
      <ColumnContainer>
        <Spacer num="3" />
        <CreateSession />
        <Spacer num="2" />
      </ColumnContainer>
    </Container>
  );
};

export default TeacherHome;
