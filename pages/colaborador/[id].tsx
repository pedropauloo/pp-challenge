import type { NextPage } from "next";

import {
  AgentContent,
  AgentContentHeader,
  AgentHeader,
  AgentPersonalInfo,
  PersonalInfo,
  InfoAgente,
  LabelPersonalInfo,
  PersonalItem,
  CircleImage,
  PersonalItemContent,
  OrganizationalData,
} from "@components/Layout/styles";
import { BackButton } from "@components/Button/styles";
import { SubTopic, Text, ThinText, Topic } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import SelectInput from "@components/Form/SelectInput";
import { Container } from "@components/Layout/styles";
import { agentsApi } from "services/agents";
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
          <CircleImage width="60" height="60">
            <Image
              src="/images/user.svg"
              alt="teste"
              width={1}
              height={1}
              layout="responsive"
            />
          </CircleImage>
          <InfoAgente>
            <SubTopic>Shinji Ikari</SubTopic>
            <ThinText>shinjiikari@gmail.com</ThinText>
          </InfoAgente>
        </AgentContentHeader>
        <AgentPersonalInfo>
          <Topic>Informações pessoais</Topic>

          <PersonalItem>
            <CircleImage width="40" height="40">
              <Image
                src="/images/id.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </CircleImage>
            <PersonalItemContent>
              <LabelPersonalInfo>CPF</LabelPersonalInfo>
              <PersonalInfo>869 748 070 15</PersonalInfo>
            </PersonalItemContent>
          </PersonalItem>

          <PersonalItem>
            <CircleImage width="40" height="40">
              <Image
                src="/images/phone-call.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </CircleImage>
            <PersonalItemContent>
              <LabelPersonalInfo>Telefone</LabelPersonalInfo>
              <PersonalInfo>+55 82 2512 6627</PersonalInfo>
            </PersonalItemContent>
          </PersonalItem>

          <PersonalItem>
            <CircleImage width="40" height="40">
              <Image
                src="/images/calendar.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </CircleImage>
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

// export async function getStaticProps({ params }: any) {
//   // const results = await fetch(
//   //   `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${agentId}`
//   // ).then((res) => res.json());
//   const agent = agentsApi.getAgentById(params.colaborador.id).then((response) => response);
//   return {
//     props: {
//       agent: agent,
//     },
//   };
// }
