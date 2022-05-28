import { ImageContainer } from "@components/Layout/styles";
import { HeaderContainer, AgentEmail, AgentName } from "./styles";

const AgentHeader = ({ children, className }: any) => {
  return <HeaderContainer className={className}>{children}</HeaderContainer>;
};

const Image = ({ children, className }: any) => {
  return <ImageContainer className={className}>{children}</ImageContainer>;
};

AgentHeader.Image = Image;

const Name = ({ children, className }: any) => {
  return <AgentName className={className}>{children}</AgentName>;
};

AgentHeader.Name = Name;

const Email = ({ children, className }: any) => {
  return <AgentEmail className={className}>{children}</AgentEmail>;
};

AgentHeader.Email = Email;

export default AgentHeader;
