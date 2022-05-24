import { useEffect, useState } from "react";
import {
  CloseButton,
  ContainerModal,
  Content,
  MenuContainer,
  ModalSection,
  Wrapper,
  MenuItem,
  Menu as MenuModal,
  MenuButton,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { SubTopic } from "@components/Text/styles";

const ModalFilter = ({ isOpen, setIsOpen, title, children }: any) => {
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
        {children}
      </Content>
    </ContainerModal>
  );
};

const Menu = ({ children }: any) => {
  return (
    <MenuModal>
      <MenuContainer>{children}</MenuContainer>
    </MenuModal>
  );
};

const Item = ({ children }: any) => {
  return (
    <MenuItem>
      <MenuButton>{children}</MenuButton>
    </MenuItem>
  );
};

Menu.Item = Item;
ModalFilter.Menu = Menu;

export default ModalFilter;
