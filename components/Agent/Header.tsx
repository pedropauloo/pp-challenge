import {
  AvatarCircle,
  ContainerHeader,
  Label,
  AvatarName,
} from "@components/Layout/styles";

export const Header = ({ avatarImage, avatarName, altImage }: any) => {
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
