import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border: none;
`;

const CreateClassButton = styled.button`
  border: none;
  padding: none;
  margin: 0 10%;
  font-size: 5rem;
  color: black;
  background-color: ${(props) => props.theme.highlight};
  border-radius: 20px;
  width: auto;
  cursor: pointer;
  font-family: ${(props) => props.theme.titleFonts};
  &:hover {
    color: ${(props) => props.theme.darkSecondary};
    background-color: ${(props) => props.theme.darkHighlight};
  }
`;

const NameTextbox = styled.input`
  margin: 5% 10% 2% 10%;
  width: auto;
  border: 5px solid black;
  border-radius: 5px;
  font-size: 5rem;
  font-family: ${(props) => props.theme.defaultFonts};
  text-align: center;
`;

const CreateSession = () => {
  const [className, setClassName] = useState("");

  const CreateClass = () => {
    console.log("CREATING CLAS");
  };

  return (
    <Container>
      <NameTextbox
        placeholder="Class Name"
        type="text"
        maxLength="20"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <CreateClassButton onClick={(e) => CreateClass()}>
        Create Class
      </CreateClassButton>
    </Container>
  );
};

export default CreateSession;
