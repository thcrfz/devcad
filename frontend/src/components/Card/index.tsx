import * as styled from './styled';

export type Card = {
  children: React.ReactNode;
};

export const Card = ({ children }: Card) => {
  return <styled.div>{children}</styled.div>;
};
