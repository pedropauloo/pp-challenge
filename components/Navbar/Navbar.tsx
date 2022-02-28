import Logo from "@components/Navbar/Logo";
import { UserImage, NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav>
        <UserImage src="/images/Avatars.svg" />
        <Logo />
      </nav>
    </NavbarContainer>
  );
};
export default Navbar;
