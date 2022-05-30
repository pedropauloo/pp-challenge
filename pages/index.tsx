import Image from "next/image";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Subtitle, Title } from "@components/Text/styles";
import { ActionButton, Button } from "@components/Button/styles";

import Card from "@components/Card/Card";
import Page from "@components/Layout/Page";
import Form from "@components/Form/Form";

import Modal from "@components/Modal/Modal";
import Collapse from "@components/Collapse/Collapse";
import Menu from "@components/Menu/Menu";
import { Header as AgentHeader } from "@components/Agent/Header";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { agentsApi } from "services/agents";

const Home: NextPage = () => {
  const [agents, setAgents] = useState<any[] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      console.log(response.data.items);
      setAgents(response.data.items);
    });
  }, []);

  return (
    <Page>
      <Page.Header>
        <Title>Colaboradores</Title>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Header>
            <Form>
              <Button
                type="button"
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
              <Form.Search
                type="text"
                label="Pesquisar por"
                placeholder="Pesquise por nome ou cpf"
              />
            </Form>
          </Card.Header>
          <Card.Body>
            <Subtitle>Listagem de colaboradores</Subtitle>

            {agents?.map((item, itemIndex) => {
              return (
                <Collapse
                  title="Nome completo"
                  key={itemIndex}
                  header={
                    <AgentHeader
                      avatarName={item.name}
                      avatarImage={item.image}
                      altImage="Imagem perfil colaborador"
                    />
                  }
                  open={false}
                >
                  <Collapse.Section>
                    <div>
                      <Collapse.Label>Departamento</Collapse.Label>
                      <Collapse.Item>{item.departament}</Collapse.Item>
                    </div>

                    <div>
                      <Collapse.Label>Cargo</Collapse.Label>
                      <Collapse.Item>{item.role}</Collapse.Item>
                    </div>
                  </Collapse.Section>
                  <Collapse.Section>
                    <div>
                      <Collapse.Label>Unidade</Collapse.Label>
                      <Collapse.Item>{item.branch2}</Collapse.Item>
                    </div>
                    <div>
                      <Collapse.Label>Unidade</Collapse.Label>
                      <Collapse.Item>{item.branch}</Collapse.Item>
                    </div>
                  </Collapse.Section>
                  <Collapse.Section>
                    <div>
                      <Collapse.Label>Status</Collapse.Label>
                      <Collapse.Badge>
                        {item.status?.replace(/^\w/, (c: string) =>
                          c.toUpperCase()
                        )}
                      </Collapse.Badge>
                    </div>
                  </Collapse.Section>
                  <Collapse.Footer>
                    <ActionButton contentPosition="center" fontWeight="600">
                      <Image
                        src="/images/file-plus.svg"
                        alt="Icone Ações"
                        width={24}
                        height={24}
                      />
                      Ações
                    </ActionButton>
                  </Collapse.Footer>
                </Collapse>
              );
            })}
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Home;
