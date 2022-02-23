import { useEffect, useState } from "react";
import { CloseButton, ContainerModal, Content, Wrapper } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { SubTopic } from "@components/Text/styles";

const Modal = ({ isOpen, setIsOpen, title }: any) => {
  const [openContent, setOpenContent] = useState(true);

  useEffect(() => {
    console.log(openContent);
    if (!openContent)
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
  }, [openContent]);

  return (
    <ContainerModal>
      <Wrapper open={openContent} onClick={() => setOpenContent(false)} />
      <Content open={openContent}>
        <SubTopic>{title}</SubTopic>
        <CloseButton onClick={() => setOpenContent(false)}>
          <CloseIcon />
        </CloseButton>
        <h1>asdasodkaso</h1>
      </Content>
    </ContainerModal>
  );
};

export default Modal;
