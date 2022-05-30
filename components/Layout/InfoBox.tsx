import {
  ImageContainer,
  InfoBox as InfoBoxContainer,
  Label as StyledLabel,
  Info as StyledInfo,
  InfoBoxContent,
} from "./styles";

interface InfoBoxProps {
  children: any;
  className?: string;
}

const InfoBox = ({ children, className }: InfoBoxProps) => {
  return <InfoBoxContainer className={className}>{children}</InfoBoxContainer>;
};

const Image = ({ children, className }: InfoBoxProps) => {
  return <ImageContainer className={className}>{children}</ImageContainer>;
};

InfoBox.Image = Image;

const Content = ({ children, className }: InfoBoxProps) => {
  return <InfoBoxContent className={className}>{children}</InfoBoxContent>;
};

InfoBox.Content = Content;

const Label = ({ children }: InfoBoxProps) => {
  return <StyledLabel>{children}</StyledLabel>;
};

InfoBox.Label = Label;

const Info = ({ children }: InfoBoxProps) => {
  return <StyledInfo>{children}</StyledInfo>;
};

InfoBox.Info = Info;

export default InfoBox;
