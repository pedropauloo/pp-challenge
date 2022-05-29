import { useEffect, useState } from "react";

import { CloseButton, ContainerModal, Content, Wrapper } from "./styles";
import { Subtitle } from "@components/Text/styles";

import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  children: any;
  closeButton?: boolean;
}

const Modal = ({
  isOpen,
  setIsOpen,
  title,
  children,
  closeButton = true,
}: ModalProps) => {
  const [openContent, setOpenContent] = useState(true);

  useEffect(() => {
    if (!openContent) setIsOpen(false);
    setTimeout(() => {}, 500);
  }, [openContent, setIsOpen]);

  return (
    <ContainerModal>
      <Wrapper open={openContent} onClick={() => setOpenContent(false)} />
      <Content open={openContent}>
        {title && <Subtitle>{title}</Subtitle>}
        {closeButton && (
          <CloseButton onClick={() => setOpenContent(false)} type="button">
            <CloseIcon />
          </CloseButton>
        )}
        {children}
      </Content>
    </ContainerModal>
  );
};

export default Modal;
