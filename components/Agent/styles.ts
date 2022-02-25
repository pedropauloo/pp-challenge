import styled from "@emotion/styled";
import Image from "next/image";

export const AvatarCircle = styled(Image)`
  position: relative;
  border-radius: 60%;
  width: 32px;
  height: 32px;
`;

export const Container = styled("div")`
  margin: 0 auto;
  padding: 0 16px;
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

export const AgentHeader = styled("div")`
  display: flex;
  align-items: flex-end;
`;
export const AgentContent = styled("div")`
  margin: 40px 0;
`;
export const AgentContentHeader = styled("div")`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;
export const AgentPersonalInfo = styled("div")``;

export const PersonalItem = styled("div")`
  margin: 8px 0;
  display: flex;
  border: 2px solid #cad6d1;
  padding: 16px;
  border-radius: 8px;
`;
export const PersonalItemImage = styled("div")`
  position: relative;
  width: 38px;
  height: 38px;
  background: #cad6d1;
  border: 2px solid #cad6d1;
  padding: 6px;
  border-radius: 50%;
`;
export const PersonalItemContent = styled("div")`
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
  color: #34423d;
`;

export const InfoAgente = styled("div")`
  margin-left: 10px;
`;

export const OrganizationalData = styled("div")`
  border: 2px solid #eaefed;
  border-radius: 8px;
  padding: 24px;
`;
