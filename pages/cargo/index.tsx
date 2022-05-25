import Image from "next/image";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button, LoadMoreIcon } from "@components/Button/styles";
import { Title, Subtitle } from "@components/Text/styles";

import Modal from "@components/Modal/Modal";
import Menu from "@components/Menu/Menu";
import Collapse from "@components/Collapse/Collapse";
import { HeaderCollapse } from "@components/Role/HeaderCollapse";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { rolesApi } from "services/roles";
import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";

const Cargo: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    rolesApi.getRoles().then((response) => {
      console.log(response.data.roles);
      setAgents(response.data.roles);
    });
  }, []);

  return (
    <Page>
      <Page.Header>
        <Title>Cargos</Title>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Header>
            <Button
              fontWeight="400"
              contentPosition="space-between"
              onClick={() => setModalOpen(true)}
            >
              Cargos <MoreVertIcon />
            </Button>

            {modalOpen && (
              <Modal
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                title="Categorias"
              >
                <Menu>
                  <Menu.Item>Colaboradores</Menu.Item>
                  <Menu.Item>Cargo</Menu.Item>
                </Menu>
              </Modal>
            )}
          </Card.Header>
          <Card.Body>
            <Subtitle>Listagem de cargos</Subtitle>

            {agents?.map((item, itemIndex) => {
              return (
                <Collapse
                  title="Nome completo"
                  key={itemIndex}
                  header={<HeaderCollapse roleName={item.name} />}
                  open={false}
                >
                  <Collapse.Section>
                    <div>
                      <Collapse.Label>Departamento</Collapse.Label>
                      <Collapse.Item>{item.departament}</Collapse.Item>
                    </div>

                    <div>
                      <Collapse.Label>Colaboradores</Collapse.Label>
                      <Collapse.Item>{item.agentsQuantity}</Collapse.Item>
                    </div>
                  </Collapse.Section>

                  <Collapse.Footer>
                    <Button contentPosition="center" fontWeight="600">
                      <Image
                        src="/images/file-plus.svg"
                        alt="Icone Ações"
                        width={24}
                        height={24}
                      />
                      Ações
                    </Button>
                  </Collapse.Footer>
                </Collapse>
              );
            })}
            <Button contentPosition="center" fontWeight="600">
              <LoadMoreIcon />
              Carregar Mais
            </Button>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Cargo;
