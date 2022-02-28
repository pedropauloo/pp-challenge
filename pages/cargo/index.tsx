import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button, LoadMoreIcon } from "@components/Button/styles";
import { ContainerCard } from "@components/Layout/styles";
import { SubTopic, Topic } from "@components/Text/styles";
import Modal from "@components/Modal/Modal";
import FormSearch from "@components/Form/FormSearch";

import Collapse from "@components/Collapse/Collapse";
import { rolesApi } from "services/roles";
import { HeaderCollapse } from "@components/Role/HeaderCollapse";
import { ContentCollapse } from "@components/Role/ContentCollapse";
import {
  ButtonMenuModal,
  ContainerMenuModal,
  ItemMenuModal,
} from "@components/Modal/styles";
import { HomeHeader } from "@components/Layout/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Cargo: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    rolesApi.getRoles().then((response) => {
      console.log(response.data.roles);
      setAgents(response.data.roles);
    });
  }, []);

  return (
    <div>
      <HomeHeader>
        <Topic>Cargos</Topic>
      </HomeHeader>
      <ContainerCard>
        <Button
          fontWeight="400"
          contentPosition="space-between"
          onClick={() => setShowModal(true)}
        >
          Cargos <MoreVertIcon />
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
        <SubTopic>Listagem de cargos</SubTopic>

        {agents?.map((item, itemIndex) => {
          return (
            <Collapse
              title="Nome completo"
              key={itemIndex}
              header={<HeaderCollapse roleName={item.name} />}
              open={false}
            >
              <ContentCollapse
                departament={item.departament}
                agentsQuantity={item.agents_quantity}
              />
            </Collapse>
          );
        })}
        <Button contentPosition="center" fontWeight="600">
          <LoadMoreIcon />
          Carregar Mais
        </Button>
      </ContainerCard>
    </div>
  );
};

export default Cargo;
