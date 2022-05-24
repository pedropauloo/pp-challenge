import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { agentsApi } from "services/agents";
import Card from "@components/Card/Card";
import Page from "@components/Layout/Page";
import Form from "@components/Form/Form";
import { Subtopic, Topic } from "@components/Text/styles";
import Collapse from "@components/Collapse/Collapse";
import { Header as AgentHeader } from "@components/Agent/Header";
import { Content as AgentContent } from "@components/Agent/Content";

const Home: NextPage = () => {
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      console.log(response.data.items);
      setAgents(response.data.items);
    });
  }, []);

  return (
    <>
      <Page>
        <Page.Header>
          <Topic>Colaboradores</Topic>
        </Page.Header>
        <Page.Body>
          <Card>
            <Card.Header>
              <Form>
                <Form.Search
                  type="text"
                  label="Pesquisar por"
                  placeholder="Pesquise por nome ou cpf"
                />
              </Form>
            </Card.Header>
            <Card.Body>
              <Subtopic>Listagem de colaboradores</Subtopic>

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
                    <AgentContent
                      departament={item.department}
                      role={item.role}
                      branch={item.branch}
                      branch2="123456789"
                      status={item.status}
                    />
                  </Collapse>
                );
              })}
            </Card.Body>
          </Card>
        </Page.Body>
      </Page>
    </>
  );
};

export default Home;
