import * as styled from './styles';

export type NavBar = {
  children: React.ReactNode;
};

export const NavBar = ({ children }: NavBar) => {
  return <styled.Navbar>{children}</styled.Navbar>;
};
