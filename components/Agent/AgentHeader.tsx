import { ImageContainer } from "@components/Layout/styles";
import { HeaderContainer, AgentEmail, AgentName } from "./styles";

interface AgentProps {
  className?: string;
  children?: any;
}

const AgentHeader = ({ children, className }: AgentProps) => {
  return <HeaderContainer className={className}>{children}</HeaderContainer>;
};

const Image = ({ children, className }: AgentProps) => {
  return <ImageContainer className={className}>{children}</ImageContainer>;
};

AgentHeader.Image = Image;

const Name = ({ children, className }: AgentProps) => {
  return <AgentName className={className}>{children}</AgentName>;
};

AgentHeader.Name = Name;

const Email = ({ children, className }: AgentProps) => {
  return <AgentEmail className={className}>{children}</AgentEmail>;
};

AgentHeader.Email = Email;

export default AgentHeader;
