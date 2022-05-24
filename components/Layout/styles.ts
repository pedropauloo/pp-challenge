import styled from "@emotion/styled";
import Image from "next/image";

export const Background = styled("main")`
  background: #f8faf9;
`;

export const Content = styled("div")`
  padding: 0 5px;
  margin: 0 auto;
`;

export const ContainerCard = styled("div")`
  margin: 20px auto 40px;
  max-width: 960px;
  padding: 20px 16px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
`;

export const HomeHeader = styled("div")`
  margin: 40px auto 24px 16px;
`;

export const AvatarCircle = styled(Image)`
  position: relative;
  border-radius: 60%;
  width: 32px;
  height: 32px;
`;

export const ContainerHeader = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const ContainerContent = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled("span")`
  display: block;
  color: #587169;
  font-weight: 600;
  font-size: 12px;
`;

export const Info = styled(Label)`
  font-weight: 400;
`;
export const InfoContent = styled("div")`
  display: flex;
  width: 100%;

  div {
    width: 50%;
    margin: 10px 0;
  }
`;

export const AvatarName = styled(Label)`
  margin-left: 8px;
`;
export const RoleName = styled(Label)``;

export const Badge = styled("span")`
  background: #b5f1dd;
  border-radius: 80px;
  font-size: 14px;
  padding: 4px 18px;
  font-weight: 500;
  color: #34423d;
`;

export const FooterContent = styled("div")`
  width: 100%;
  margin-top: 16px;
`;

export const PageHeader = styled("div")`
  display: flex;
  margin: 40px auto 24px 16px;
`;
export const PageContent = styled("div")``;
export const PageContentHeader = styled("div")`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
export const PageSection = styled("div")``;

export const ItemSection = styled("div")`
  margin: 8px 0;
  display: flex;
  border: 2px solid #cad6d1;
  background: #f5faf8;
  padding: 16px;
  border-radius: 8px;
`;
export const CircleImage = styled("div")<{
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
export const ItemSectionContent = styled("div")`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;
export const LabelPersonalInfo = styled("span")`
  font-size: 12px;
  font-weight: 400;
  color: #587169;
`;
export const PersonalInfo = styled("span")`
  font-size: 14px;
  font-weight: 600;
  color: #587169;
`;

export const InfoAgente = styled("div")`
  margin-left: 10px;
`;

export const OrganizationalData = styled("div")`
  border: 2px solid #eaefed;
  border-radius: 8px;
  padding: 24px;
`;
