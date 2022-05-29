import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { BackButton } from "@components/Button/styles";
import { Subtitle, Text, ThinText, Title } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import { AvatarCircle, ImageContainer, Label } from "@components/Layout/styles";
import InfoBox from "@components/Layout/InfoBox";
import AgentHeader from "@components/Agent/AgentHeader";
import Form from "@components/Form/Form";

import { agentsApi } from "services/agents";

const Agent: NextPage = () => {
  const route = useRouter();

  const { id } = route.query;
  const [agent, setAgent] = useState<any>();

  useEffect(() => {
    if (id) {
      agentsApi.getAgentById(id).then((response) => {
        console.log(response.data.agent);
        setAgent(response.data.agent);
      });
    }
  }, [id]);

  return (
    <Page>
      <Page.Header>
        <BackButton rounded="50%">
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

            <Subtitle>Informações Pessoais</Subtitle>

            <InfoBox className="bg-light-gray">
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
            <InfoBox className="bg-light-gray mt-8">
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
            <InfoBox className="bg-light-gray mt-8 mb-40">
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
                  {new Date(agent?.birth_date).toLocaleDateString()}
                </InfoBox.Info>
              </InfoBox.Content>
            </InfoBox>
            <InfoBox>
              <InfoBox.Content>
                <Subtitle>Dados organizacionais</Subtitle>
                <Form.Select
                  className="mb-24"
                  label="Departamento"
                  value={agent?.department}
                  disabled
                />
                <Form.Select
                  className="mb-24"
                  label="Cargo"
                  value={agent?.role}
                  disabled
                />
                <Form.Select
                  className="mb-24"
                  label="Unidade"
                  value={agent?.branch}
                  disabled
                />
                <Form.Select
                  className="mb-24"
                  label="Status"
                  value={agent?.status === "active" ? "Ativo" : "Inativo"}
                  disabled
                />
              </InfoBox.Content>
            </InfoBox>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Agent;
