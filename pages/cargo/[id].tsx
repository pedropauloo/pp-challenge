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
import { Container } from "@components/Layout/styles";
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
      setRole(response.data.role);
    });
  }, []);

  return (
    <Container>
      <PageHeader>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <Topic>Novo cargo</Topic>
      </PageHeader>
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
                  <FormCheckbox checked={checked} />
                  {/* <TableData>{row.permissions[0]}</TableData> */}
                  <TableData>{row.permissions[1]}</TableData>
                  <TableData>{row.permissions[2]}</TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </PageContent>
    </Container>
  );
};

export default Agent;
