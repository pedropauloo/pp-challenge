import type { NextPage } from "next";

import {
  PageContent,
  PageHeader,
  PageSection,
} from "@components/Layout/styles";
import { BackButton } from "@components/Button/styles";
import { Topic } from "@components/Text/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormSelect from "@components/Form/FormSelect";
import { ContainerCard } from "@components/Layout/styles";
import FormInput from "@components/Form/FormInput";
import { useEffect, useState } from "react";
import { rolesApi } from "services/roles";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeadData,
  TableRow,
} from "@components/Table/styles";
import FormCheckbox from "@components/Form/FormCheckbox";

const Agent: NextPage = () => {
  const [role, setRole] = useState(null);
  const [checked, setChecked] = useState(false);

  function handlerCheckbox() {
    setChecked(!checked);
  }

  useEffect(() => {
    rolesApi.getRoleById(1).then((response) => {
      console.log(response.data.role);
      console.log(response.data.role.grouprules[0].permissions.includes('write'))
      setRole(response.data.role);
    });
  }, []);

  return (
    <>
      <PageHeader>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <Topic>Novo cargo</Topic>
      </PageHeader>
      <ContainerCard>
        <PageContent>
          <PageSection>
            <Topic>Dados do cargo</Topic>

            <FormSelect label="Departamento" content="Comercial" />

            <FormInput type="text" label="Cargo" />
          </PageSection>
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
              {role?.grouprules.map((row, rowIndex): any => {
                return (
                  <TableRow key={rowIndex}>
                    <TableData>{row.role}</TableData>
                    <TableData>
                      <FormCheckbox checked={row.permissions.includes('read')} />
                    </TableData>
                    <TableData>
                      <FormCheckbox checked={row.permissions.includes('write')} />
                    </TableData>
                    <TableData>
                      <FormCheckbox checked={row.permissions.includes('delete')} />
                    </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </PageContent>
      </ContainerCard>
    </>
  );
};

export default Agent;
