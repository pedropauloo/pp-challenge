import Logo from "@components/Navbar/Logo";
import { UserImage, NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav>
        <UserImage src="https://lh3.googleusercontent.com/-IuCsSRpLGNA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmvcW5nF5ju1mJj8vZBvZRzvxMV1Q/s48-c/photo.jpg" />
        <Logo />
      </nav>
    </NavbarContainer>
  );
};
export default Navbar;
