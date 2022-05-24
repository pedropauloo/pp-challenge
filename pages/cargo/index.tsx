import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button, LoadMoreIcon } from "@components/Button/styles";
import { PageHeader } from "@components/Layout/styles";
import { SubTopic } from "@components/Text/styles";
import ModalFilter from "@components/Modal/ModalFilter";
import FormSearch from "@components/Form/Search";

import Collapse from "@components/Collapse/Collapse";
import { rolesApi } from "services/roles";
import { HeaderCollapse } from "@components/Role/HeaderCollapse";
import { ContentCollapse } from "@components/Role/ContentCollapse";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardBody } from "@components/Card/styles";

const Cargo: NextPage = () => {
  const [modalFilter, setModalFilter] = useState(false);
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    rolesApi.getRoles().then((response) => {
      console.log(response.data.roles);
      setAgents(response.data.roles);
    });
  }, []);

  return (
    <div>
      <PageHeader>
        <h1>Cargos</h1>
      </PageHeader>
      <CardBody>
        <Button
          fontWeight="400"
          contentPosition="space-between"
          onClick={() => setModalFilter(true)}
        >
          Cargos <MoreVertIcon />
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

        {/* <FormSearch
          type="text"
          label="Pesquisar por"
          placeholder="Pesquise por nome ou cpf"
        /> */}
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
      </CardBody>
    </div>
  );
};

export default Cargo;
