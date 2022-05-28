import Image from "next/image";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Subtitle, Title } from "@components/Text/styles";
import { Button, LoadMoreIcon } from "@components/Button/styles";

import Card from "@components/Card/Card";
import Page from "@components/Layout/Page";
import Form from "@components/Form/Form";

import Modal from "@components/Modal/Modal";
import Collapse from "@components/Collapse/Collapse";
import Menu from "@components/Menu/Menu";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { agentsApi } from "services/agents";
import {
  AvatarCircle,
  AvatarName,
  ImageContainer,
  Status,
} from "@components/Layout/styles";
import DropdownMenu from "@components/Layout/DropdownMenu";

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
                className="space-between fw-medium mb-40"
                onClick={() => setModalOpen(true)}
              >
                Colaboradores <MoreVertIcon />
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
              const dropdownOptions = [
                {
                  label: "Ver colaborador",
                  icon: <VisibilityOutlinedIcon />,
                  url: `/colaborador/" + ${item.id}`,
                  disabled: false,
                },
                {
                  label: "Excluir",
                  icon: <DeleteOutlineOutlinedIcon />,
                  url: `/colaborador/exluir/" + ${item.id}`,
                  disabled: true,
                },
              ];

              return (
                <Collapse
                  disabled={item.status === "active" ? false : true}
                  title="Nome completo"
                  key={itemIndex}
                  header={
                    <>
                      <Collapse.Label className="mb-8">
                        Nome completo
                      </Collapse.Label>
                      <ImageContainer>
                        <AvatarCircle
                          src={item.image}
                          alt="Imagem perfil colaborador"
                          width={32}
                          height={32}
                        />
                        <Collapse.Item className="fw-bold ml-8">
                          {item.name}
                        </Collapse.Item>
                      </ImageContainer>
                    </>
                  }
                  open={false}
                >
                  <Collapse.Body>
                    <Collapse.Section>
                      <div>
                        <Collapse.Label>Departamento</Collapse.Label>
                        <Collapse.Item>{item.department}</Collapse.Item>
                      </div>

                      <div>
                        <Collapse.Label>Cargo</Collapse.Label>
                        <Collapse.Item>{item.role}</Collapse.Item>
                      </div>
                    </Collapse.Section>
                    <Collapse.Section>
                      <div>
                        <Collapse.Label>Unidade</Collapse.Label>
                        <Collapse.Item>123456789</Collapse.Item>
                      </div>
                      <div>
                        <Collapse.Label>Unidade</Collapse.Label>
                        <Collapse.Item>{item.branch}</Collapse.Item>
                      </div>
                    </Collapse.Section>
                    <Collapse.Section>
                      <div>
                        <Collapse.Label>Status</Collapse.Label>
                        <Status status={item.status}>
                          {item.status === "active" ? "Ativo" : "Inativo"}
                        </Status>
                      </div>
                    </Collapse.Section>
                  </Collapse.Body>
                  <Collapse.Footer>
                    <DropdownMenu label={"Ações"} options={dropdownOptions} />
                  </Collapse.Footer>
                </Collapse>
              );
            })}
            <Button className="center fw-bold">
              <LoadMoreIcon />
              Carregar Mais
            </Button>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Home;
