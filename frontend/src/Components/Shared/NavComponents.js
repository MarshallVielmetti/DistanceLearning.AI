import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  height: auto;
  font-size: 1rem;
  background-color: ${(props) => props.theme.secondary};
  width: 100vw;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  border: none;
  text-decoration: none;
  font-family: ${(props) => props.theme.defaultFonts};
  color: ${(props) => props.theme.offWhite};
  height: 5vh;
  font-size: 1 rem;
  padding: 0 20px;
  &:hover {
    background-color: ${(props) => props.theme.darkSecondary};
  }
`;

const NavText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: vertical;
  text-align: center;
`;

const SpecialLink = styled(NavLink)`
  background-color: ${(props) => props.theme.highlight};
  &:hover {
    background-color: ${(props) => props.theme.darkHighlight};
  }
`;

export { NavContainer, NavLink, NavText, SpecialLink };
