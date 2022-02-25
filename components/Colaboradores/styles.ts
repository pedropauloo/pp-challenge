import styled from "@emotion/styled";
import Image from "next/image";

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
