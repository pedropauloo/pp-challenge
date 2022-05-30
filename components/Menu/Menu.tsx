import { useRouter } from "next/router";
import {
  Menu as MenuComponent,
  MenuContainer,
  MenuItem,
  MenuButton,
} from "@components/Layout/styles";

interface MenuProps {
  children: any;
}

interface MenuItemProps {
  asElement?: any;
  children: any;
  disabled?: boolean;
  url?: string;
}

const Menu = ({ children }: MenuProps) => {
  return (
    <MenuComponent>
      <MenuContainer className="p-0">{children}</MenuContainer>
    </MenuComponent>
  );
};

const Item = ({
  children,
  disabled,
  asElement,
  url,
  ...props
}: MenuItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;

    if (!url) return;

    return router.push(url);
  };

  return (
    <MenuItem className={disabled ? "disabled" : ""} onClick={handleClick}>
      <MenuButton as={asElement ?? "button"} {...props}>
        {children}
      </MenuButton>
    </MenuItem>
  );
};

Menu.Item = Item;

export default Menu;
