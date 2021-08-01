import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";

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
`;

const Header = styled.h1`
  width: auto;
  height: auto;
  font-size: 4rem;
  color: ${(props) => props.theme.offWhite};
  font-family: ${(props) => props.theme.titleFonts};
  margin: 30px 0;
`;

const InputTag = styled.div`
  width: 18%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledEmail = styled(AiOutlineMail)`
  font-size: 2rem;
  color: white;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: 100%;
`;

const InputContainer = styled.div`
  width: 70%;
  height: 2.2rem;
  background-color: white;
  border-radius: 2px;
  margin: 10px 0;
  &:hover ${InputTag} {
    width: 22%;
  }
  display: flex;
  flex-direction: row;
`;

const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.secondary};
  align-items: center; ;
`;

export {
  Container,
  SignupPageContainer,
  Header,
  InputContainer,
  InputTag,
  StyledEmail,
  StyledInput,
};
