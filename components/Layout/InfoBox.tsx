import { InfoBox as InfoBoxContainer } from "./styles";
const InfoBox = ({ children }: any) => {
  return <InfoBoxContainer>{children}</InfoBoxContainer>;
};

const Image = ({ children }: any) => {
  return <div>{children}</div>;
};

InfoBox.Image = Image;

const Content = ({ children }: any) => {
  return <div>{children}</div>;
};

InfoBox.Content = Content;

export default InfoBox;
