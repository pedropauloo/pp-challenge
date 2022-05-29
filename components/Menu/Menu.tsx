import {
  Menu as MenuComponent,
  MenuContainer,
  MenuItem,
  MenuButton,
} from "@components/Layout/styles";
import { useRouter } from "next/router";

const Menu = ({ children }: any) => {
  return (
    <MenuComponent>
      <MenuContainer className="p-0">{children}</MenuContainer>
    </MenuComponent>
  );
};

const Item = ({ children, as, disabled, url }: any) => {
  const router = useRouter();
  return (
    <MenuItem className={disabled ? "disabled" : ""}>
      <MenuButton as={as} onClick={() => router.push(url)}>
        {children}
      </MenuButton>
    </MenuItem>
  );
};

Menu.Item = Item;

export default Menu;
