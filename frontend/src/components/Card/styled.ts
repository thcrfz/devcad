import styled from 'styled-components';

export const div = styled.div`
  cursor: pointer;
  background: #fff;
  margin-top: 2rem;
  padding: 1em;
  border-radius: 0.8rem;
  height: auto;
  box-shadow: 0rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  transition: transform 200ms;
  :hover {
    transform: translateY(-2rem);
  }
`;
