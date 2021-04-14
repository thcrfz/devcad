import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }
  html{
    font-size: 62,5%;
  }
  body{
    font-size: 1.6rem;
    line-height: 1.5;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto Mono', sans-serif;
  }

  h1 {
  font-size: 6rem;
  text-transform: uppercase;
  }
  h2 {
  font-size: 5.5rem;
  }
  h3 {
  font-size: 5rem;
  }
  h4 {
  font-size: 4rem;
  }
  h5 {
  font-size: 3.5rem;
  }
  h6 {
  font-size: 3rem;
  }

  a {
  text-decoration: none;
  }
  ul{
    list-style: none
  }

  @media only screen and (max-width: 1126px) {
    h2 {
      font-size: 4.8rem;
    }
  }
  @media only screen and (max-width: 668px) {
    h2 {
      font-size: 2.5rem;
    }
  }
  @media only screen and (max-width: 577px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 487px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 394px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 320px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const BackgroundContainer = styled.section`
  background-image: url('/assets/img/background.svg');
  background-size: cover;
  background-position: center center;
`;

export const MainContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing.gap};
`;

export const MainButton = styled.button`
  background-color: #fff;
  padding: 0.5rem 5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'Titillium Web', sans-serif;
  border: none;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #222020;
    color: #fff;
  }
`;
