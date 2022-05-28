import { Button } from "@components/Button/styles";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "./styles";

interface OptionsDropdown {
  label: string | JSX.Element;
  icon: JSX.Element | string;
  url: string;
}
interface DropdownProps {
  label: string | JSX.Element;
  options: Array<OptionsDropdown>;
}

const DropdownMenu = ({ label, options }: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <DropdownContainer>
      <Button
        className="center fw-bold"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Image
          src="/images/file-plus.svg"
          alt="Icone Ações"
          width={24}
          height={24}
        />
        {label}
      </Button>

      {showOptions && (
        <DropdownContent>
          <MenuContainer>
            {options.map((item, index) => (
              <MenuItem key={index}>
                <MenuButton type="button">
                  {item.icon}
                  <span className="ml-16">{item.label}</span>
                </MenuButton>
              </MenuItem>
            ))}
          </MenuContainer>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};
export default DropdownMenu;
