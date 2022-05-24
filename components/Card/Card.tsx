import { Card as CardComponent, CardBody, CardHeader } from "./styles";

const Card = ({ children }: any) => {
  return <CardComponent>{children}</CardComponent>;
};

const Header = ({ children }: any) => {
  return <CardHeader>{children}</CardHeader>;
};

Card.Header = Header;

const Body = ({ children }: any) => {
  return <CardBody>{children}</CardBody>;
};

Card.Body = Body;

const Footer = ({ children }: any) => {
  return <div>{children}</div>;
};

Card.Footer = Footer;

export default Card;
