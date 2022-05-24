import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button, LoadMoreIcon } from "@components/Button/styles";
import { ContainerCard, PageHeader } from "@components/Layout/styles";
import { SubTopic, Topic } from "@components/Text/styles";
import ModalFilter from "@components/Modal/ModalFilter";
import FormSearch from "@components/Form/FormSearch";

import Collapse from "@components/Collapse/Collapse";
import { agentsApi } from "services/agents";
import { HeaderCollapse } from "@components/Agent/HeaderCollapse";
import { ContentCollapse } from "@components/Agent/ContentCollapse";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Home: NextPage = () => {
  const [modalFilter, setModalFilter] = useState(false);
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      console.log(response.data.items);
      setAgents(response.data.items);
    });
  }, []);

  return (
    <div>
      <PageHeader>
        <Topic>Colaboradores</Topic>
      </PageHeader>
      <ContainerCard>
        <Button
          fontWeight="400"
          contentPosition="space-between"
          onClick={() => setModalFilter(true)}
        >
          Colaboradores <MoreVertIcon />
        </Button>

        {modalFilter && (
          <ModalFilter
            isOpen={modalFilter}
            setIsOpen={setModalFilter}
            title="Categorias"
          >
            <ModalFilter.Menu>
              <ModalFilter.Menu.Item>Colaboradores</ModalFilter.Menu.Item>
              <ModalFilter.Menu.Item>Cargo</ModalFilter.Menu.Item>
            </ModalFilter.Menu>
          </ModalFilter>
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
      </ContainerCard>
    </div>
  );
};

export default Home;
