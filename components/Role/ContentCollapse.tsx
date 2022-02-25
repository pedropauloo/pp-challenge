import { Button } from "@components/Button/styles";
import Image from "next/image";
import {
  ContainerContent,
  Info,
  InfoContent,
  Label,
  FooterContent,
} from "@components/Layout/styles";

export const ContentCollapse = ({ departament, agentsQuantity }: any) => {
  return (
    <ContainerContent>
      <InfoContent>
        <div>
          <Label>Departamento</Label>
          <Info>{departament}</Info>
        </div>

        <div>
          <Label>Colaboradores</Label>
          <Info>{agentsQuantity}</Info>
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
