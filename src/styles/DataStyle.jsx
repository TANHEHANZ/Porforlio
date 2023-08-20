import { css } from "styled-components";

export const colors = {
  light: "#F0F0F1",
  dark: "#222322",
  primary: "#141BA6",
  secundary: "#3F5FBF",
  complement: "#8B96D9",
};
export const ComunStyles = css`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  
`;
export const Elemts = css`
  content: "";
  position: absolute;
  background-color: ${colors.primary};
  color:${colors.light};

`;

export const animate = css`
color:${colors.light};
  background: linear-gradient(
    to right,
    transparent 0%,
    transparent 50%,
    ${colors.primary} 50%,
    ${colors.primary} 100%
  );
  background-size: 200% 100%;
  animation: sweepAnimation 3s infinite;
  @keyframes sweepAnimation {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -100% 0;
    }
  }
`;
export const animateAfter = css`
 animation: moveAndResize 8s  infinite linear;
 @keyframes moveAndResize {
 /* from{
    top:2em;
 }
 to{
    top:10em;
 } */
 0% {
    top: 2em;
    transform: scale(1);
  }
  25% {
    top: 5em;
    transform: scale(0.8);
  }
  50% {
    top: 10em;
    transform: scale(0.4);  
  }
  75%{
      top: 5em;
    transform: scale(0.8);
  }
  100%{
      top: 2em;
    transform: scale(1);
  }
  }
`;

