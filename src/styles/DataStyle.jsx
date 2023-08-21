import { css } from "styled-components";

export const colors = {
  light: "#F0F0F1",
  dark: "#222322",
  primary: "#8C0327",
  secundary: "#012E40",
  complement: "#0a2ab9",
  truee: "#F28705",
};
export const ComunStyles = css`
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
export const Elemts = css`
  content: "";
  position: absolute;
  background-color: ${colors.complement};
  color: ${colors.light};
`;

export const animate = css`
  color: ${colors.light};
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
  animation: moveAndResize 8s infinite linear;
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
    75% {
      top: 5em;
      transform: scale(0.8);
    }
    100% {
      top: 2em;
      transform: scale(1);
    }
  }
`;

export const EfectGlass = css`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 10px rgba(52, 53, 56, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;


