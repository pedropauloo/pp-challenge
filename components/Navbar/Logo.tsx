import Image from "next/image";
import { LogoContainer } from "./styles";

const Logo = () => {
  return (
    <LogoContainer>
      <Image src="/images/brand.svg" layout="fill" alt="Logo" />
    </LogoContainer>
  );
};
export default Logo;
