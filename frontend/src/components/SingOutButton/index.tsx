import { SingOut } from './styled';

export type SignOutProps = {
  onClick: () => void;
};

export const SignOutButton = ({ onClick }: SignOutProps) => {
  return <SingOut onClick={onClick}>Sair</SingOut>;
};
