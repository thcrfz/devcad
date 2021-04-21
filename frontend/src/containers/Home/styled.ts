import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const div = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  ul {
    display: flex;
  }
  ul li a {
    display: block;
    padding: 1rem;
    position: relative;
  }
  ul li a::after {
    content: '';
    position: absolute;
    height: 0.2rem;
    bottom: 0.5rem;
    width: 0;
    left: 50%;
    background: #fff;
    transition: all 300ms ease-in-out;
  }

  ul li a:hover::after {
    width: 70%;
    left: 15.5%;
  }
`;
export const descriptionSection = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2.5fr 5fr;
  gap: 3rem;
  width: 100%;
  height: 100vh;
  background-image: url('/assets/img/Rainbow-Vortex.svg');
  background-size: cover;
  background-position: center center;
  border-bottom: 0.2rem solid ${theme.colors.primary};
  div {
    display: flex;
    padding: 2rem;
    flex-flow: column wrap;
    justify-content: center;
  }
  h1,
  p {
    color: #fff;
  }
`;
