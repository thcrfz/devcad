import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Navbar = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  text-transform: uppercase;
  color: #ffff;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.8);
  z-index: 2;
  h2 {
    padding: 1rem;
    font-size: 2rem;
  }
`;
