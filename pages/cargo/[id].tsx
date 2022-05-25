import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { BackButton } from "@components/Button/styles";
import { Title } from "@components/Text/styles";

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

const Agent: NextPage = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    rolesApi.getRoleById(1).then((response) => {
      console.log(response.data.role);
      console.log(
        response.data.role.grouprules[0].permissions.includes("write")
      );
      setRole(response.data.role);
    });
  }, []);

  return (
    <Page>
      <Page.Header>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <Title>Novo cargo</Title>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Header>
            <Title>Dados do cargo</Title>
            <Form>
              <Form.Select label="Departamento" content="Comercial" />
              <Form.Input type="text" label="Cargo" />
            </Form>
          </Card.Header>
          <Card.Body>
            <ResponsiveTableContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadData>Cargo</TableHeadData>
                    <TableHeadData>Ler</TableHeadData>
                    <TableHeadData>Editar</TableHeadData>
                    <TableHeadData>Comentar</TableHeadData>
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
