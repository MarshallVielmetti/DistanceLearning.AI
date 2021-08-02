import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => props.theme.darkSecondary};
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 18vw;
  border-radius: 10px;
  border: 5px solid ${(props) => props.theme.highlight};
  color: white;
  align-items: center;
  min-width: 300px;
`;

const Header = styled.h1`
  width: auto;
  height: auto;
  font-size: 4rem;
  color: ${(props) => props.theme.offWhite};
  font-family: ${(props) => props.theme.titleFonts};
  margin: 30px 0;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: auto;
  padding: none;
  margin: none;
  border: none;
`;

const InputContainer = styled.div`
  width: 70%;
  height: 2.2rem;
  background-color: white;
  border-radius: 2px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  &:hover ${StyledInput} {
    background-color: ${(props) => props.theme.offWhite};
  }
`;

const InputTag = styled.div`
  width: 10px;
  height: auto;
  background-color: ${(props) => props.theme.highlight};
  border: none;
`;

const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.secondary};
  align-items: center;
`;

const BackContainer = styled.div`
  width: 100%;
  position: static;
`;

const BackLink = styled(Link)`
  position: absolute;
  height: 40px;
  width: 50px;
  padding-left: 10px;
  justify-self: right;
`;

const BackArrow = styled(BsArrowLeft)`
  font-size: 200%;
  color: ${(props) => props.theme.offWhite};
`;

const ActionButton = styled.button`
  background-color: ${(props) => props.theme.highlight};
  width: 100px;
  height: 50px;
  color: white;
  border-radius: 5px;
  border: none;
  font-family: ${(props) => props.theme.defaultFonts};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.darkHighlight};
  }
`;

const ActionContainer = styled.div`
  margin: 30px 10px 10px 10px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionRows = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
`;

const TeacherCheckbox = styled.input`
  cursor: pointer;
`;

const ForgotPassword = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.offWhite};
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.darkWhite};
  }
`;

const ForgotSignin = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.offWhite};
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.defaultFonts};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.darkWhite};
  }
`;

export {
  Container,
  SignupPageContainer,
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
  ForgotPassword,
  ForgotSignin,
};
