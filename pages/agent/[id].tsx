import type { NextPage } from "next";

import {
  AgentContent,
  AgentContentHeader,
  AgentHeader,
  AgentPersonalInfo,
  AvatarCircle,
  Container,
  PersonalInfo,
  InfoAgente,
  LabelPersonalInfo,
  PersonalItem,
  PersonalItemImage,
  PersonalItemContent,
  OrganizationalData,
} from "@components/Agent/styles";
import { BackButton } from "@components/Button/styles";
import { SubTopic, Text, ThinText, Topic } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import SelectInput from "@components/Form/SelectInput";
const Agent: NextPage = () => {
  return (
    <Container>
      <AgentHeader>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <Topic>Detalhes do colaborador</Topic>
      </AgentHeader>
      <AgentContent>
        <AgentContentHeader>
          <AvatarCircle
            src="/images/file-plus.svg"
            alt="teste"
            width={64}
            height={64}
          />
          <InfoAgente>
            <SubTopic>Shinji Ikari</SubTopic>
            <ThinText>shinjiikari@gmail.com</ThinText>
          </InfoAgente>
        </AgentContentHeader>
        <AgentPersonalInfo>
          <Topic>Informações pessoais</Topic>

          <PersonalItem>
            <PersonalItemImage>
              <Image
                src="/images/id.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </PersonalItemImage>
            <PersonalItemContent>
              <LabelPersonalInfo>CPF</LabelPersonalInfo>
              <PersonalInfo>869 748 070 15</PersonalInfo>
            </PersonalItemContent>
          </PersonalItem>

          <PersonalItem>
            <PersonalItemImage>
              <Image
                src="/images/phone-call.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </PersonalItemImage>
            <PersonalItemContent>
              <LabelPersonalInfo>Telefone</LabelPersonalInfo>
              <PersonalInfo>+55 82 2512 6627</PersonalInfo>
            </PersonalItemContent>
          </PersonalItem>

          <PersonalItem>
            <PersonalItemImage>
              <Image
                src="/images/calendar.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </PersonalItemImage>
            <PersonalItemContent>
              <LabelPersonalInfo>Nascimento</LabelPersonalInfo>
              <PersonalInfo>29/11/1990</PersonalInfo>
            </PersonalItemContent>
          </PersonalItem>
        </AgentPersonalInfo>

        <OrganizationalData>
          <Topic>Dados organizacionais</Topic>
          <SelectInput label="Departamento" content="Comercial" />
          <SelectInput label="Cargo" content="Gerente" />
          <SelectInput label="Unidade" content="Unidade 1" />
          <SelectInput label="Status" content="Ativo" />
        </OrganizationalData>
      </AgentContent>
    </Container>
  );
};

export default Agent;
