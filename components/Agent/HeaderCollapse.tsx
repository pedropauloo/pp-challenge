import { AvatarCircle, ContainerHeader, Label, AvatarName } from "./styles";

export const HeaderCollapse = ({ avatarImage, avatarName, altImage }: any) => {
  return (
    <>
      <Label>Nome completo</Label>
      <ContainerHeader>
        <AvatarCircle src={avatarImage} alt={altImage} width={32} height={32} />
        <AvatarName>{avatarName}</AvatarName>
      </ContainerHeader>
    </>
  );
};
