import React from "react";
import styled from "styled-components";
import WebcamComponent from "Components/Webcam/WebcamComponent";
import { Spacer } from "Components/Shared";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const RowContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.titleFonts};
  font-size: 5rem;
  color: black;
  margin: none;
  padding: none;
  height: auto;
`;

const DataColumnContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const LeaveClassButton = styled.button`
  position: absolute;
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

const StudentClass = () => {
  return (
    <Container>
      <StartContainer>
        <LeaveClassButton>Quit</LeaveClassButton>
      </StartContainer>
      <RowContainer>
        <Header>{"Class Name"}</Header>
      </RowContainer>
      <RowContainer>
        <Spacer />
        <WebcamComponent />
        <Spacer />
        <DataColumnContainer>DATA GOES HERE</DataColumnContainer>
        <Spacer />
      </RowContainer>
    </Container>
  );
};

export default StudentClass;
