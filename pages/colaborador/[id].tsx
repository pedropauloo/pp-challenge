import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { BackButton } from "@components/Button/styles";
import { Subtitle, Text, ThinText, Title } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import {
  AvatarCircle,
  BoxContainer,
  ImageContainer,
  Label,
} from "@components/Layout/styles";
import InfoBox from "@components/Layout/InfoBox";
import AgentHeader from "@components/Agent/AgentHeader";
import Form from "@components/Form/Form";

import { agentsApi } from "services/agents";

type AgentDocumentType = {
  type: string;
  number: string;
};
type AgentPhoneType = {
  ddd: string;
  ddi: string;
  number: string;
};

type AgentType = {
  id: number;
  name: string;
  email: string;
  phone: AgentPhoneType;
  document: AgentDocumentType;
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

const Agent: NextPage = () => {
  const route = useRouter();

  const { id } = route.query;
  const [agent, setAgent] = useState<AgentType | null>();

  useEffect(() => {
    if (id) {
      agentsApi.getAgentById(id).then((response) => {
        setAgent(response.data.agent);
      });
    }
  }, [id]);

  return (
    <Page>
      <Page.Header>
        <BackButton rounded="50%" onClick={() => route.push("/")}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Detalhes do colaborador</Title>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Body>
            <AgentHeader className="mb-40">
              <AgentHeader.Image>
                <AvatarCircle
                  src={"/images/user.svg"}
                  alt={"Imagem teste"}
                  width={80}
                  height={80}
                />
              </AgentHeader.Image>
              <div>
                <AgentHeader.Name>{agent?.name}</AgentHeader.Name>
                <AgentHeader.Email>{agent?.email}</AgentHeader.Email>
              </div>
            </AgentHeader>

            <Subtitle>Informa????es Pessoais</Subtitle>
            <BoxContainer className="mb-40">
              <InfoBox className="bg-light-gray mt-8 mx-0">
                <InfoBox.Image className="bg-gray p-10 rounded-full">
                  <AvatarCircle
                    src={"/images/id.svg"}
                    alt={"Imagem teste"}
                    width={38}
                    height={38}
                  />
                </InfoBox.Image>
                <InfoBox.Content>
                  <InfoBox.Label className="fw-light">CPF</InfoBox.Label>
                  <InfoBox.Info className="fw-light">
                    {agent?.document.number}
                  </InfoBox.Info>
                </InfoBox.Content>
              </InfoBox>
              <InfoBox className="bg-light-gray mt-8 mx-0 mx-sm-24">
                <InfoBox.Image className="bg-gray p-10 rounded-full">
                  <AvatarCircle
                    src={"/images/phone-call.svg"}
                    alt={"Imagem teste"}
                    width={38}
                    height={38}
                  />
                </InfoBox.Image>
                <InfoBox.Content>
                  <InfoBox.Label className="fw-light">Telefone</InfoBox.Label>
                  <InfoBox.Info className="fw-light">
                    +{agent?.phone.ddi} {agent?.phone.ddd} {agent?.phone.number}
                  </InfoBox.Info>
                </InfoBox.Content>
              </InfoBox>
              <InfoBox className="bg-light-gray mt-8 mx-0">
                <InfoBox.Image className="bg-gray p-10 rounded-full">
                  <AvatarCircle
                    src={"/images/calendar.svg"}
                    alt={"Imagem teste"}
                    width={38}
                    height={38}
                  />
                </InfoBox.Image>
                <InfoBox.Content>
                  <InfoBox.Label className="fw-light">Nascimento</InfoBox.Label>
                  <InfoBox.Info className="fw-light">
                    {agent && new Date(agent.birth_date).toLocaleDateString()}
                  </InfoBox.Info>
                </InfoBox.Content>
              </InfoBox>
            </BoxContainer>
            <InfoBox>
              <InfoBox.Content>
                <Subtitle>Dados organizacionais</Subtitle>
                <BoxContainer>
                  <Form.Select
                    containerClasses="mw-420 mr-sm-24"
                    className="mb-24"
                    label="Departamento"
                    value={agent?.department}
                    disabled
                  />
                  <Form.Select
                    containerClasses="mw-420"
                    className="mb-24"
                    label="Cargo"
                    value={agent?.role}
                    disabled
                  />
                  <Form.Select
                    containerClasses="mw-420 mr-sm-24"
                    className="mb-24"
                    label="Unidade"
                    value={agent?.branch}
                    disabled
                  />
                  <Form.Select
                    containerClasses="mw-420"
                    className="mb-24"
                    label="Status"
                    value={agent?.status === "active" ? "Ativo" : "Inativo"}
                    disabled
                  />
                </BoxContainer>
              </InfoBox.Content>
            </InfoBox>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Agent;
