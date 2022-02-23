import Logo from "@components/Navbar/Logo";
import { Avatar, NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav>
        <Avatar src="https://lh3.googleusercontent.com/-IuCsSRpLGNA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmvcW5nF5ju1mJj8vZBvZRzvxMV1Q/s48-c/photo.jpg" />
        <Logo />
      </nav>
    </NavbarContainer>
  );
};
export default Navbar;
