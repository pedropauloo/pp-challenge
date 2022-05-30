import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { BackButton } from "@components/Button/styles";
import { Subtitle, Title } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "@components/Layout/Page";
import Form from "@components/Form/Form";
import Card from "@components/Card/Card";

import { rolesApi } from "services/roles";

import {
  ResponsiveTableContent,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeadData,
  TableRow,
} from "@components/Table/styles";
import { BoxContainer } from "@components/Layout/styles";

type GroupRules = {
  role: string;
  permission: string[];
};
type RoleType = {
  name: string;
  department: string;
  grouprules: GroupRules[];
};

const Agent: NextPage = () => {
  const [role, setRole] = useState<RoleType | null>(null);

  useEffect(() => {
    rolesApi.getRoleById(1).then((response) => {
      setRole(response.data.role);
    });
  }, []);

  return (
    <Page>
      <Page.Header>
        <BackButton rounded="8px">
          <ArrowBackIcon />
        </BackButton>
        <Title>Cargos e permissões</Title>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Header>
            <Subtitle>Dados do cargo</Subtitle>
            <Form>
              <BoxContainer>
                <Form.Select
                  containerClasses="mw-420 mr-sm-24"
                  className="mb-24"
                  label="Departamento"
                  value="Comercial"
                />
                <Form.Input
                  containerClasses="mw-420"
                  type="text"
                  label="Cargo"
                  value={role?.name}
                />
              </BoxContainer>
            </Form>
          </Card.Header>
          <Card.Body>
            <Subtitle>Listagem de permissões</Subtitle>
            <ResponsiveTableContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadData>Cargo</TableHeadData>
                    <TableHeadData>Ler</TableHeadData>
                    <TableHeadData>Editar</TableHeadData>
                    <TableHeadData>Excluir</TableHeadData>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {role?.grouprules.map((row: any, rowIndex: any) => {
                    return (
                      <TableRow key={rowIndex}>
                        <TableData>{row.role}</TableData>
                        <TableData>
                          <Form.Checkbox
                            checked={row.permissions.includes("read")}
                          />
                        </TableData>
                        <TableData>
                          <Form.Checkbox
                            checked={row.permissions.includes("write")}
                          />
                        </TableData>
                        <TableData>
                          <Form.Checkbox
                            checked={row.permissions.includes("delete")}
                          />
                        </TableData>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </ResponsiveTableContent>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Agent;
