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
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { rolesApi } from "services/roles";
import Page from "@components/Layout/Page";
import Card from "@components/Card/Card";
import Form from "@components/Form/Form";
import DropdownMenu from "@components/Layout/DropdownMenu";

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
            <Form>
              <Button
                type="button"
                className="space-between fw-medium mb-40"
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
            <Subtitle>Listagem de cargos</Subtitle>

            {agents?.map((item, itemIndex) => {
              const dropdownOptions = [
                {
                  label: "Ver cargo",
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

export default Cargo;
