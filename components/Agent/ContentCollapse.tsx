import { Button } from "@components/Button/styles";
import Image from "next/image";
import {
  Badge,
  ContainerContent,
  Info,
  InfoContent,
  Label,
  FooterContent,
} from "./styles";

export const ContentCollapse = ({
  department,
  role,
  branch,
  branch2,
  status,
}: any) => {
  return (
    <ContainerContent>
      <InfoContent>
        <div>
          <Label>Departamento</Label>
          <Info>{department}</Info>
        </div>

        <div>
          <Label>Cargo</Label>
          <Info>{role}</Info>
        </div>
      </InfoContent>

      <InfoContent>
        <div>
          <Label>Unidade</Label>
          <Info>{branch2}</Info>
        </div>
        <div>
          <Label>Unidade</Label>
          <Info>{branch}</Info>
        </div>
      </InfoContent>
      <InfoContent>
        <div>
          <Label>Status</Label>
          <Badge>{status.replace(/^\w/, (c: string) => c.toUpperCase())}</Badge>
        </div>
      </InfoContent>
      <FooterContent>
        <Button contentPosition="center" fontWeight="600">
          <Image
            src="/images/file-plus.svg"
            alt="Icone Ações"
            width={24}
            height={24}
          />
          Ações
        </Button>
      </FooterContent>
    </ContainerContent>
  );
};
