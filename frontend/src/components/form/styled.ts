import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: center;
  border-bottom: 2px solid ${theme.colors.primary};
`;
export const form = styled.form`
  display: grid;
  width: 60vh;
  gap: 2rem;
  padding: 4rem;
  box-shadow: 0.5rem 0rem 1rem 0 rgb(0 0 0 / 50%);
`;
