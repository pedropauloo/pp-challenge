import {
  Menu as MenuComponent,
  MenuContainer,
  MenuItem,
  MenuButton,
} from "./styles";

const Menu = ({ children }: any) => {
  return (
    <MenuComponent>
      <MenuContainer>{children}</MenuContainer>
    </MenuComponent>
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

export default Menu;
