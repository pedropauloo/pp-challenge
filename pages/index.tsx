import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { ModalButton } from "@components/Button/styles";
import { Container } from "@components/Layout/styles";
import { SubTopic, Topic } from "@components/Text/styles";
import Modal from "@components/Modal/Modal";
import SearchInput from "@components/Form/SearchInput";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@components/Collapse/Collapse";
import { agentsApi } from "services/agents";
import Image from "next/image";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [agents, setAgents] = useState<any[] | null>(null);

  useEffect(() => {
    agentsApi.getAgents().then((response) => {
      console.log(response.data.items);
      setAgents(response.data.items);
    });
  }, []);

  return (
    <div>
      <Topic>Colaboradores</Topic>
      <Container>
        <ModalButton onClick={() => setShowModal(true)}>
          Colaboradores <MoreVertIcon />
        </ModalButton>
        {showModal && (
          <Modal
            isOpen={showModal}
            setIsOpen={setShowModal}
            title="Categorias"
          />
        )}
        <SearchInput
          type="text"
          label="Pesquisar por"
          placeholder="Pesquise por nome ou cpf"
        />
        <SubTopic>Listagem de colaboradores</SubTopic>

        {agents?.map((item, itemIndex) => {
          const image = (
            <Image
              src={item.image}
              alt="Agent profile"
              width={32}
              height={32}
            />
          );
          return (
            <Collapse
              title="Nome completo"
              key={itemIndex}
              subTitle={image}
              open={false}
            ></Collapse>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;
