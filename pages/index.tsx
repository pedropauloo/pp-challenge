import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button, LoadMoreIcon } from "@components/Button/styles";
import { Container } from "@components/Layout/styles";
import { SubTopic, Topic } from "@components/Text/styles";
import Modal from "@components/Modal/Modal";
import FormSearch from "@components/Form/FormSearch";

import Collapse from "@components/Collapse/Collapse";
import { agentsApi } from "services/agents";
import { HeaderCollapse } from "@components/Agent/HeaderCollapse";
import { ContentCollapse } from "@components/Agent/ContentCollapse";
import {
  ButtonMenuModal,
  ContainerMenuModal,
  ItemMenuModal,
} from "@components/Modal/styles";
import { HomeHeader } from "@components/Layout/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      console.log(response.data.items);
      setAgents(response.data.items);
    });
  }, []);

  return (
    <div>
      <Container>
        <HomeHeader>
          <Topic>Colaboradores</Topic>
        </HomeHeader>
        <Button
          fontWeight="400"
          contentPosition="space-between"
          onClick={() => setShowModal(true)}
        >
          Colaboradores <MoreVertIcon />
        </Button>
        {showModal && (
          <Modal isOpen={showModal} setIsOpen={setShowModal} title="Categorias">
            <ContainerMenuModal>
              <ItemMenuModal>
                <ButtonMenuModal>Colaboradores</ButtonMenuModal>
              </ItemMenuModal>
              <ItemMenuModal>
                <ButtonMenuModal>Cargos</ButtonMenuModal>
              </ItemMenuModal>
            </ContainerMenuModal>
          </Modal>
        )}
        <FormSearch
          type="text"
          label="Pesquisar por"
          placeholder="Pesquise por nome ou cpf"
        />
        <SubTopic>Listagem de colaboradores</SubTopic>

        {agents?.map((item, itemIndex) => {
          return (
            <Collapse
              title="Nome completo"
              key={itemIndex}
              header={
                <HeaderCollapse
                  avatarName={item.name}
                  avatarImage={item.image}
                  altImage="Imagem perfil colaborador"
                />
              }
              open={false}
            >
              <ContentCollapse
                departament={item.department}
                role={item.role}
                branch={item.branch}
                branch2="123456789"
                status={item.status}
              />
            </Collapse>
          );
        })}
        <Button contentPosition="center" fontWeight="600">
          <LoadMoreIcon />
          Carregar Mais
        </Button>
      </Container>
    </div>
  );
};

export default Home;
