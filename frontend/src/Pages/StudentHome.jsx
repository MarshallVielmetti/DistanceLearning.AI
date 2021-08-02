import React from "react";
import styled from "styled-components";
import { Spacer } from "Components/Shared";
import JoinSession from "Components/Join Session/JoinSession";

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

const StudentHome = () => {
  return (
    <Container>
      <ColumnContainer>
        <TitleText>Welcome, {"Name"}</TitleText>
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
