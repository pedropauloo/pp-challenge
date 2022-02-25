import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button } from "@components/Button/styles";
import { Container } from "@components/Layout/styles";
import { SubTopic, Topic } from "@components/Text/styles";
import Modal from "@components/Modal/Modal";
import SearchInput from "@components/Form/SearchInput";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@components/Collapse/Collapse";
import { agentsApi } from "services/agents";
import { HeaderCollapse } from "@components/Agent/HeaderCollapse";
import { ContentCollapse } from "@components/Agent/ContentCollapse";
import {
  ButtonMenuModal,
  ContainerMenuModal,
  ItemMenuModal,
} from "@components/Modal/styles";

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
      <Topic>Colaboradores</Topic>
      <Container>
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
                <ButtonMenuModal>teste</ButtonMenuModal>
              </ItemMenuModal>
              <ItemMenuModal>
                <ButtonMenuModal>teste</ButtonMenuModal>
              </ItemMenuModal>
            </ContainerMenuModal>
          </Modal>
        )}
        <SearchInput
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
                department={item.department}
                role={item.role}
                branch={item.branch}
                branch2="123456789"
                status={item.status}
              />
            </Collapse>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;
