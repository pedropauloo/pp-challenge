import styled from "@emotion/styled";
import Image from "next/image";

export const Background = styled("main")`
  background: #f8faf9;
  min-height: 100vh;
`;

export const Content = styled("div")`
  padding: 0 6px;
  margin: 0 auto;
`;

export const Label = styled("span")`
  display: block;
  font-weight: 600;
  font-size: 12px;
`;

export const Info = styled("span")`
  font-size: 14px;
  font-weight: 600;
  color: #587169;
`;

export const Status = styled("span")<{
  status: string;
}>`
  background: ${({ status }) => (status === "active" ? "#b5f1dd" : "#EAEFED")};
  border-radius: 80px;
  font-size: 14px;
  padding: 4px 18px;
  font-weight: 500;
  color: #34423d;
`;

export const AvatarCircle = styled(Image)`
  position: relative;
  border-radius: 60%;
  width: 32px;
  height: 32px;
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const AvatarName = styled(Label)`
  margin-left: 8px;
`;

export const RoleName = styled(Label)``;

export const Section = styled("section")`
  margin: 8px 0;
  display: flex;
  border: 2px solid #cad6d1;
  padding: 16px;
  border-radius: 8px;
`;

export const InfoBox = styled("div")`
  display: flex;
  border: 2px solid #cad6d1;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
`;

export const InfoBoxContent = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const ContainerCircle = styled("div")<{
  width: string;
  height: string;
  padding: string;
}>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: #eaefed;
  padding: ${({ padding }) => padding}px;
  border-radius: 50%;
`;

export const SectionContent = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoAgente = styled("div")`
  margin-left: 10px;
`;

export const OrganizationalData = styled("div")`
  border: 2px solid #eaefed;
  border-radius: 8px;
  padding: 24px;
`;

// ----- Page Content -----

export const PageHeader = styled("div")`
  display: flex;
  margin: 40px auto 24px 16px;
`;

export const DropdownButton = styled("button")`

  display: inline-flex;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const DropdownContainer = styled("nav")`
  /* width: 100%; */
  display: inline-block;
  text-align: left;
`;

export const DropdownContent = styled("nav")`
  box-shadow: 0px 8px 24px 0px #a5abb366;
  position: absolute;
  background: #ffffff;
  border-radius: 8px;
  transform-origin: top right;
  border-top-width: 0px;
  border-bottom-width: 1px;
  z-index: 10;
`;

export const Menu = styled("nav")``;

export const MenuContainer = styled("ol")`
  list-style: none;
  padding: 8px 0;
`;

export const MenuButton = styled("button")`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: start;
  width: fit;
  border: none;
  font-size: 16px;
  text-align: left;
`;

export const MenuItem = styled("li")`
  min-width: 200px;
  padding: 17px 24px;

  &:hover:not(.disabled) {
    cursor: pointer;
    background: #f8faf9;
  }

  &.disabled:hover {
    cursor: default;
  }

  &.disabled ${MenuButton} {
    opacity: 0.5;
  }
`;
