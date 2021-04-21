import styled from 'styled-components';

export const Intro = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
  height: 100vh;
  align-items: center;
  h2 {
    color: #fff;
  }
  h2::after {
    content: 'devcad';
    font-family: 'Titillium Web', sans-serif;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 425px) {
    padding: 1rem;
  }
  @media (max-width: 768px), (min-width: 425px) {
    height: auto;
  }
`;

export const DivButton = styled.div`
  padding: 3rem;

  @media only screen and (max-width: 375px) {
    padding: 1rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 360px) {
    padding: 1rem;
    margin-top: 9rem;
  }
`;

export const Description = styled.div`
  padding: 3rem;

  ul,
  p {
    font-family: 'Zilla Slab Highlight', cursive;
    color: #fff;
  }
  ul li {
    padding: 0.2rem;
  }

  @media only screen and (max-width: 425px) {
    ul {
      display: flex;
    }
    ul,
    p {
      margin-top: 1rem;
    }
    ul li {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 375px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 320px) {
    padding: 0;
  }
`;

export const MainButton = styled.button`
  padding: 0.5rem 5rem;
`;
