import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  min-height: 5vh;
  font-size: 1rem;
  font-family: ${(props) => props.theme.titleFonts};
  color: ${(props) => props.theme.offWhite};
  background-color: ${(props) => props.theme.secondary};
  width: 100vw;
  flex-direction: row;
  align-items: center;
`;

const NavLink = styled(Link)`
  padding: 0vw 2vw;
  height: 5vh;
  background-color: red;
`;

const Spacer = styled.div`
  flex-grow: ${(props) => (props.num ? props.num : 1)};
`;

export { NavContainer, NavLink, Spacer };
