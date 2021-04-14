import { Navbar } from "./styles";

export type logoutProps = {
  handleLogout: () => void;
};

export default function NavBar({ handleLogout }: logoutProps) {
  return (
    <Navbar>
        <button onClick={handleLogout}>
          Logout
        </button>
    </Navbar>
  );
}
