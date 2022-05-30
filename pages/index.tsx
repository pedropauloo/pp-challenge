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

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { agentsApi } from "services/agents";

import {
  AvatarCircle,
  AvatarName,
  ImageContainer,
  Status,
} from "@components/Layout/styles";

import DropdownMenu from "@components/Layout/DropdownMenu";
import { TabPanel } from "@components/Layout/TabPanel";

const Home: NextPage = () => {
  const [agents, setAgents] = useState<any[] | null>(null);
  const [modalPage, setModalPage] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      console.log(response.data.items);
      setAgents(response.data.items);
    });
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const tabProps = (index: any) => {
    return {
      id: `initial-page-tab-${index}`,
      "aria-controls": `initial-page-tab-${index}`,
    };
  };

  return (
    <>
      <Page className="d-sm-none">
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
                  onClick={() => setModalPage(true)}
                >
                  Colaboradores <MoreVertIcon />
                </Button>

                {modalPage && (
                  <Modal
                    isOpen={modalPage}
                    setIsOpen={setModalPage}
                    title="Categorias"
                  >
                    <Menu>
                      <Menu.Item asElement="a">Colaboradores</Menu.Item>
                      <Menu.Item asElement="a" url="cargo">
                        Cargo
                      </Menu.Item>
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
                    icon: <VisibilityOutlinedIcon className="mr-8" />,
                    url: `colaborador/${item.agent_id}`,
                    disabled: false,
                  },
                  {
                    label: "Excluir",
                    icon: <DeleteOutlineOutlinedIcon className="mr-8" />,
                    url: `colaborador/excluir/${item.agent_id}`,
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
                      <Button
                        type="button"
                        className="center fw-bold pr-10"
                        onClick={() => setModalMenu(true)}
                      >
                        <Image
                          src="/images/file-plus.svg"
                          alt="Icone Ações"
                          width={24}
                          height={24}
                        />{" "}
                        Ações
                      </Button>
                      {modalMenu && (
                        <Modal
                          isOpen={modalMenu}
                          setIsOpen={setModalMenu}
                          title=""
                          closeButton={false}
                        >
                          <Menu>
                            {dropdownOptions.map((option, optionIndex) => (
                              <Menu.Item
                                key={optionIndex}
                                url={option.url}
                                disabled={option.disabled}
                                asElement="a"
                              >
                                {option.icon}
                                {option.label}
                              </Menu.Item>
                            ))}
                          </Menu>
                        </Modal>
                      )}
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
      <Page className="d-none d-sm-block container-center">
        <Page.Header className="mx-0">
          <Title>Organização</Title>
        </Page.Header>
        <Page.Body>
          <Card>
            <Card.Body>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="Initial page"
                  textColor="inherit"
                  TabIndicatorProps={{ style: { background: "#22E0A1" } }}
                >
                  <Tab
                    className="fw-bold px-40"
                    label="Colaboradores"
                    {...tabProps(0)}
                  />
                  <Tab
                    className="fw-bold px-40"
                    label="Cargos"
                    {...tabProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
            </Card.Body>
          </Card>
        </Page.Body>
      </Page>
    </>
  );
};

export default Home;
