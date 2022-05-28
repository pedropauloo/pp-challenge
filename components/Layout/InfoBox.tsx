import {
  ImageContainer,
  InfoBox as InfoBoxContainer,
  Label as StyledLabel,
  Info as StyledInfo,
  InfoBoxContent,
} from "./styles";
const InfoBox = ({ children, className }: any) => {
  return <InfoBoxContainer className={className}>{children}</InfoBoxContainer>;
};

const Image = ({ children, className }: any) => {
  return <ImageContainer className={className}>{children}</ImageContainer>;
};

InfoBox.Image = Image;

const Content = ({ children, className }: any) => {
  return <InfoBoxContent className={className}>{children}</InfoBoxContent>;
};

InfoBox.Content = Content;

const Label = ({ children }: any) => {
  return <StyledLabel>{children}</StyledLabel>;
};

InfoBox.Label = Label;

const Info = ({ children }: any) => {
  return <StyledInfo>{children}</StyledInfo>;
};

InfoBox.Info = Info;

export default InfoBox;
