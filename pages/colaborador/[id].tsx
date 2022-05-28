import type { NextPage } from "next";

import { BackButton } from "@components/Button/styles";
import { Subtitle, Text, ThinText, Title } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import { AvatarCircle, ImageContainer } from "@components/Layout/styles";
import InfoBox from "@components/Layout/InfoBox";

const UserPage: NextPage = () => {
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
            <ImageContainer>
              <AvatarCircle
                src={"/images/file-plus.svg"}
                alt={"Imagem teste"}
                width={80}
                height={80}
              />
            </ImageContainer>

            <Subtitle>Informações Pessoais</Subtitle>

            <InfoBox>
              <InfoBox.Image></InfoBox.Image>
              <InfoBox.Content>
                <h1>akdkaspokd</h1>
              </InfoBox.Content>
            </InfoBox>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default UserPage;
