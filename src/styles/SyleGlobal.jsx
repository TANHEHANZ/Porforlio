import { styled } from "styled-components";
import { ComunStyles, Elemts, animate, animateAfter, colors } from "./DataStyle";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100vw;
  position: relative;
  & img {
    position: absolute;
    z-index: 1;
    width: 50px;
    left: 0em;
    height: 80vh;
    width: auto;
  }
  &::after {
    ${Elemts}
    width:10em;
    height: 10em;
    border-radius: 50%;
    top: 10em;
    right: 2em;
    ${animateAfter}
  }

`;
export const Nav = styled.nav`
  position: absolute;
  z-index: 2;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 75%;
  height: 80vh;
  right: 0;
  color: ${colors.dark};
  ${ComunStyles}
  flex-direction:column;
  padding: 2em;
  gap: 1.5rem;
  &::after {
    ${Elemts}
    width: 3%;
    height: 10%;
    top: 5%;
    left: 0;
  }
  
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: ${colors.dark};
  width: 100px;
  border-left: solid 2px ${colors.primary};
  padding-left: 0.5em;
  background-color:transparent;

  &:hover {
    width: 100px;
    border-left: solid 2px ${colors.primary};
    border-right: solid 2px ${colors.primary};
    ${animate}
  }
`;
export const Section = styled.section`
  ${ComunStyles}
  flex-direction:column;
  
  & h1 {
    ${ComunStyles}
  background-color:transparent;

    letter-spacing: 1.5px;
    gap: 0.5rem;
    align-items: center;
    font-family: "Great Vibes", cursive;
    font-size: 1.5em;
    
    & div {
      color: ${colors.primary};
      font-size: 3rem;
      font-family: "Great Vibes", cursive;
    }
  }
  & > h2 {
    ${ComunStyles};
    font-size: 1.2em;
    font-weight: 200;
  background-color:transparent;

    &::first-line {
      color: ${colors.primary};
    }
  }
  & button {
    ${Elemts}
    bottom:0em;
    right: 4em;
    border: none;
    padding: 1em 2em;
    cursor: pointer;
  }
`;
