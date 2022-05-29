import { Card as CardComponent, CardBody, CardHeader } from "./styles";

interface CardProps {
  className?: string;
  children: any;
}

const Card = ({ children }: CardProps) => {
  return <CardComponent>{children}</CardComponent>;
};

const Header = ({ children }: CardProps) => {
  return <CardHeader>{children}</CardHeader>;
};

Card.Header = Header;

const Body = ({ children }: CardProps) => {
  return <CardBody>{children}</CardBody>;
};

Card.Body = Body;

const Footer = ({ children }: CardProps) => {
  return <div>{children}</div>;
};

Card.Footer = Footer;

export default Card;
