import {
  AvatarCircle,
  ImageContainer,
  Label,
  AvatarName,
} from "@components/Layout/styles";

export const CollapseHeader = ({ avatarImage, avatarName, altImage }: any) => {
  return (
    <>
      <Label>Nome completo</Label>
      <ImageContainer className="mt-8">
        <AvatarCircle src={avatarImage} alt={altImage} width={32} height={32} />
        <AvatarName>{avatarName}</AvatarName>
      </ImageContainer>
    </>
  );
};
