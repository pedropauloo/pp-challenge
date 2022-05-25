import Image from "next/image";
import type { NextPage } from "next";

import {
  PageContentHeader,
  PersonalInfo,
  InfoAgente,
  LabelPersonalInfo,
  ItemSection,
  CircleImage,
  ItemSectionContent,
  OrganizationalData,
} from "@components/Layout/styles";
import { BackButton } from "@components/Button/styles";
import { Subtitle, Text, ThinText, Title } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import Form from "@components/Form/Form";

import { agentsApi } from "services/agents";

const Agent: NextPage = () => {
  return (
    <Page>
      <Page.Header>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <Title>Detalhes do colaborador</Title>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Body>
            <PageContentHeader>
              <CircleImage width="80" height="80" padding="16">
                <Image
                  src="/images/user.svg"
                  alt="teste"
                  width={1}
                  height={1}
                  layout="responsive"
                />
              </CircleImage>
              <InfoAgente>
                <Subtitle>Shinji Ikari</Subtitle>
                <ThinText>shinjiikari@gmail.com</ThinText>
              </InfoAgente>
            </PageContentHeader>

            <Title>Informações pessoais</Title>

            <ItemSection>
              <CircleImage width="40" height="40" padding="8">
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
              <CircleImage width="40" height="40" padding="8">
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
              <CircleImage width="40" height="40" padding="8">
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

            <OrganizationalData>
              <Title>Dados organizacionais</Title>
              <Form.Select label="Departamento" content="Comercial" />
              <Form.Select label="Cargo" content="Gerente" />
              <Form.Select label="Unidade" content="Unidade 1" />
              <Form.Select label="Status" content="Ativo" />
            </OrganizationalData>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
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
