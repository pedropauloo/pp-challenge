import Image from "next/image";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Button, LoadMoreIcon } from "@components/Button/styles";
import { Title, Subtitle } from "@components/Text/styles";
import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import Form from "@components/Form/Form";
import Modal from "@components/Modal/Modal";
import Menu from "@components/Menu/Menu";
import Collapse from "@components/Collapse/Collapse";
import { HeaderCollapse } from "@components/Role/HeaderCollapse";
import { Status } from "@components/Layout/styles";
import DropdownMenu from "@components/Layout/DropdownMenu";
import { TabPanel } from "@components/Layout/TabPanel";
import {
  ResponsiveTableContent,
  Table,
  TableHead,
  TableRow,
  TableData,
  TableHeadData,
  TableBody,
} from "@components/Table/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { rolesApi } from "services/roles";
import { agentsApi } from "services/agents";

type AgentsType = {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

type RolesType = {
  name: string;
  departament: string;
  agents_quantity: number;
};

const Cargo: NextPage = () => {
  const [modalPage, setModalPage] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);

  const [agents, setAgents] = useState<AgentsType[] | null>(null);
  const [roles, setRoles] = useState<RolesType[] | null>(null);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      setAgents(response.data.items);
    });

    rolesApi.getRoles().then((response) => {
      setRoles(response.data.roles);
    });
  }, []);

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
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
          <Title>Cargos</Title>
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
                  Cargos <MoreVertIcon />
                </Button>
                {modalPage && (
                  <Modal
                    isOpen={modalPage}
                    setIsOpen={setModalPage}
                    title="Categorias"
                  >
                    <Menu>
                      <Menu.Item asElement="a" url="/">
                        Colaboradores
                      </Menu.Item>
                      <Menu.Item asElement="a">Cargo</Menu.Item>
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
              <Subtitle>Listagem de cargos</Subtitle>

              {roles?.map((item, itemIndex) => {
                const dropdownOptions = [
                  {
                    label: "Ver cargo",
                    icon: <VisibilityOutlinedIcon className="mr-8" />,
                    url: `cargo/${++itemIndex}`,
                    disabled: false,
                  },
                  {
                    label: "Editar",
                    icon: <EditOutlinedIcon className="mr-8" />,
                    url: `cargo/editar/${++itemIndex}`,
                    disabled: true,
                  },
                  {
                    label: "Duplica",
                    icon: <ContentCopyOutlinedIcon className="mr-8" />,
                    url: `cargo/duplicar/${++itemIndex}`,
                    disabled: true,
                  },
                  {
                    label: "Excluir",
                    icon: <RepeatOutlinedIcon className="mr-8" />,
                    url: `cargo/exluir/${++itemIndex}`,
                    disabled: true,
                  },
                ];

                return (
                  <Collapse
                    title="Nome completo"
                    key={itemIndex}
                    header={<HeaderCollapse roleName={item.name} />}
                    open={false}
                  >
                    <Collapse.Body>
                      <Collapse.Section>
                        <div>
                          <Collapse.Label>Departamento</Collapse.Label>
                          <Collapse.Item>{item.departament}</Collapse.Item>
                        </div>

                        <div>
                          <Collapse.Label>Colaboradores</Collapse.Label>
                          <Collapse.Item>{item.agents_quantity}</Collapse.Item>
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
                  value={tabValue}
                  onChange={handleChange}
                  aria-label="Initial page"
                  textColor="inherit"
                  TabIndicatorProps={{ style: { background: "#22E0A1" } }}
                >
                  <Tab
                    className="fw-bold px-40"
                    label="Colaboradores"
                    {...tabProps(1)}
                  />
                  <Tab
                    className="fw-bold px-40"
                    label="Cargos"
                    {...tabProps(0)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={tabValue} index={0}>
                <Form>
                  <Form.Search
                    className="my-40"
                    type="text"
                    label="Pesquisar por"
                    placeholder="Pesquise por nome ou cpf"
                  />
                </Form>

                <Subtitle className="mb-40">Listagem de colaboradores</Subtitle>

                <ResponsiveTableContent>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadData>Nome completo</TableHeadData>
                        <TableHeadData>Departamento</TableHeadData>
                        <TableHeadData>Cargo</TableHeadData>
                        <TableHeadData>Unidade</TableHeadData>
                        <TableHeadData>Status</TableHeadData>
                        <TableHeadData></TableHeadData>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {agents?.map((item: any, rowIndex: any) => {
                        const dropdownOptions = [
                          {
                            label: "Ver colaborador",
                            icon: <VisibilityOutlinedIcon className="mr-8" />,
                            url: `colaborador/${item.agent_id}`,
                            disabled: false,
                          },
                          {
                            label: "Excluir",
                            icon: (
                              <DeleteOutlineOutlinedIcon className="mr-8" />
                            ),
                            url: `colaborador/excluir/${item.agent_id}`,
                            disabled: true,
                          },
                        ];

                        return (
                          <TableRow key={rowIndex}>
                            <TableData>{item.name}</TableData>
                            <TableData>{item.department}</TableData>
                            <TableData>{item.role}</TableData>
                            <TableData>{item.branch}</TableData>
                            <TableData>
                              <Status status={item.status}>
                                {item.status === "active" ? "Ativo" : "Inativo"}
                              </Status>
                            </TableData>
                            <TableData className="d-flex end">
                              <DropdownMenu
                                label={<MoreVertIcon />}
                                options={dropdownOptions}
                              />
                            </TableData>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ResponsiveTableContent>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Form>
                  <Form.Search
                    className="my-40"
                    type="text"
                    label="Pesquisar por"
                    placeholder="Pesquise por nome ou cpf"
                  />
                </Form>

                <Subtitle className="mb-40">Listagem de colaboradores</Subtitle>

                <ResponsiveTableContent>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadData>Cargo</TableHeadData>
                        <TableHeadData>Departamento</TableHeadData>
                        <TableHeadData>Colaboradores</TableHeadData>
                        <TableHeadData></TableHeadData>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {roles?.map((item: any, rowIndex: any) => {
                        const dropdownOptions = [
                          {
                            label: "Ver cargo",
                            icon: <VisibilityOutlinedIcon className="mr-8" />,
                            url: `cargo/${++rowIndex}`,
                            disabled: false,
                          },
                          {
                            label: "Editar",
                            icon: <EditOutlinedIcon className="mr-8" />,
                            url: `cargo/editar/${++rowIndex}`,
                            disabled: true,
                          },
                          {
                            label: "Duplica",
                            icon: <ContentCopyOutlinedIcon className="mr-8" />,
                            url: `cargo/duplicar/${++rowIndex}`,
                            disabled: true,
                          },
                          {
                            label: "Excluir",
                            icon: <RepeatOutlinedIcon className="mr-8" />,
                            url: `cargo/exluir/${++rowIndex}`,
                            disabled: true,
                          },
                        ];

                        return (
                          <TableRow key={rowIndex}>
                            <TableData>{item.name}</TableData>
                            <TableData>{item.departament}</TableData>
                            <TableData>{item.agents_quantity}</TableData>
                            <TableData className="d-flex end">
                              <DropdownMenu
                                label={<MoreVertIcon />}
                                options={dropdownOptions}
                              />
                            </TableData>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ResponsiveTableContent>
              </TabPanel>
            </Card.Body>
          </Card>
        </Page.Body>
      </Page>
    </>
  );
};

export default Cargo;
