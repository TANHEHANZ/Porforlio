import { styled } from "styled-components";
import {
  ComunStyles,
  EfectGlass,
  Elemts,
  animate,
  animateAfter,
  colors,
} from "./DataStyle";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 90vw;
  position: relative;
  height: 80vh;
  margin: 0 auto;
  & img {
    position: absolute;
    z-index: 1;
    width: 50px;
    left: 0em;
    height: 82vh;
    width: auto;
    padding: 1em;
    border-bottom: solid 1px ${colors.light};
    border-left: solid 1px ${colors.light};
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
  &::before {
    ${Elemts}
    filter: blur(5px);
    background-color: ${colors.primary};
    width: 15em;
    height: 15em;
    border-radius: 50%;
    bottom: -6em;
    left: -5em;
  }
`;

export const Footer = styled.footer`
  width: 80vw;
  margin: 4em auto;
  height: 100vh;
  background-color: #1300c0ab;

  /* & > article {
    ${EfectGlass}
    width: 100%;
    height: 80vh;
    background-color: #0000002b;
  }
  &::before {
    ${Elemts}
    width:10em;
    height: 10em;
    z-index: -1;
    top: 5em;
    border-radius: 50%;
    left: 2em;
  }
  &::after {
    ${Elemts}
    width:15em;
    height: 15em;
    z-index: -1;
    top: 20em;
    border-radius: 50%;
    right: 10em;
  } */
`;
export const Nav = styled.nav`
  position: absolute;
  z-index: 2;
  ${EfectGlass}
  width: 72%;
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
  border-left: solid 2px ${colors.complement};
  padding-left: 0.2em;
  background-color: transparent;
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

  & > h1 {
    ${ComunStyles}
    background-color:transparent;

    letter-spacing: 1.5px;
    gap: 0.5rem;
    align-items: center;
    font-family: "Great Vibes", cursive;
    font-size: 1.5em;

    & div {
      color: ${colors.complement};
      font-size: 3rem;
      font-family: "Great Vibes", cursive;
    }
  }
  & > div {
    width: 80%;
    /* text-align:center; */
    margin: 2em auto;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 2em;
    & strong {
      color: ${colors.primary};
      font-size: 2rem;
      font-family: "Great Vibes", cursive;
    }
    & em {
      color: ${colors.primary};
      font-size: 1rem;
      font-style: normal;
    }
  }
  & > h2 {
    ${ComunStyles};
    font-size: 1.2em;
    font-weight: 200;
    background-color: transparent;

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
