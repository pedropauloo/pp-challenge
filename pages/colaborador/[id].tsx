import type { NextPage } from "next";

import { BackButton } from "@components/Button/styles";
import { Subtitle, Text, ThinText, Title } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import { AvatarCircle, ImageContainer, Label } from "@components/Layout/styles";
import InfoBox from "@components/Layout/InfoBox";
import AgentHeader from "@components/Agent/AgentHeader";
import Form from "@components/Form/Form";

const Agent: NextPage = () => {
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
                <AgentHeader.Name>Nome do colaborador</AgentHeader.Name>
                <AgentHeader.Email>Email do colaborador</AgentHeader.Email>
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
                <InfoBox.Info className="fw-light">083.565.084-79</InfoBox.Info>
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
                  +55 82 2512 6627
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
                <InfoBox.Info className="fw-light">29/11/1990</InfoBox.Info>
              </InfoBox.Content>
            </InfoBox>
            <InfoBox>
              <InfoBox.Content>
                <Subtitle>Dados organizacionais</Subtitle>
                <Form.Select
                  className="mb-24"
                  label="Departamento"
                  value="Department"
                  disabled
                />
                <Form.Select
                  className="mb-24"
                  label="Cargo"
                  value="Cargo"
                  disabled
                />
                <Form.Select
                  className="mb-24"
                  label="Unidade"
                  value="Unidade"
                  disabled
                />
                <Form.Select
                  className="mb-24"
                  label="Status"
                  value="Activo"
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
