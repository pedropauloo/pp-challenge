import type { NextPage } from "next";

import {
  PageContent,
  PageContentHeader,
  PageHeader,
  PageSection,
  PersonalInfo,
  InfoAgente,
  LabelPersonalInfo,
  ItemSection,
  CircleImage,
  ItemSectionContent,
  OrganizationalData,
} from "@components/Layout/styles";
import { BackButton } from "@components/Button/styles";
import { SubTopic, Text, ThinText, Topic } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import FormSelect from "@components/Form/FormSelect";
import { Container } from "@components/Layout/styles";
import { agentsApi } from "services/agents";
const Agent: NextPage = () => {
  return (
    <Container>
      <PageHeader>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <Topic>Detalhes do colaborador</Topic>
      </PageHeader>
      <PageContent>
        <PageContentHeader>
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
        </PageContentHeader>
        <PageSection>
          <Topic>Informações pessoais</Topic>

          <ItemSection>
            <CircleImage width="40" height="40">
              <Image
                src="/images/id.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </CircleImage>
            <ItemSectionContent>
              <LabelPersonalInfo>CPF</LabelPersonalInfo>
              <PersonalInfo>869 748 070 15</PersonalInfo>
            </ItemSectionContent>
          </ItemSection>

          <ItemSection>
            <CircleImage width="40" height="40">
              <Image
                src="/images/phone-call.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </CircleImage>
            <ItemSectionContent>
              <LabelPersonalInfo>Telefone</LabelPersonalInfo>
              <PersonalInfo>+55 82 2512 6627</PersonalInfo>
            </ItemSectionContent>
          </ItemSection>

          <ItemSection>
            <CircleImage width="40" height="40">
              <Image
                src="/images/calendar.svg"
                alt="teste"
                width={1}
                height={1}
                layout="responsive"
              />
            </CircleImage>
            <ItemSectionContent>
              <LabelPersonalInfo>Nascimento</LabelPersonalInfo>
              <PersonalInfo>29/11/1990</PersonalInfo>
            </ItemSectionContent>
          </ItemSection>
        </PageSection>

        <OrganizationalData>
          <Topic>Dados organizacionais</Topic>
          <FormSelect label="Departamento" content="Comercial" />
          <FormSelect label="Cargo" content="Gerente" />
          <FormSelect label="Unidade" content="Unidade 1" />
          <FormSelect label="Status" content="Ativo" />
        </OrganizationalData>
      </PageContent>
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
