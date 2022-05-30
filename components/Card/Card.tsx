import { Card as CardComponent, CardBody, CardHeader } from "./styles";

interface CardProps {
  className?: string;
  children: any;
}

const Card = ({ children, className }: CardProps) => {
  return <CardComponent className={className}>{children}</CardComponent>;
};

const Header = ({ children, className }: CardProps) => {
  return <CardHeader className={className}>{children}</CardHeader>;
};

Card.Header = Header;

const Body = ({ children, className }: CardProps) => {
  return <CardBody className={className}>{children}</CardBody>;
};

Card.Body = Body;

const Footer = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};

Card.Footer = Footer;

export default Card;
