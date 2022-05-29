import Image from "next/image";

import { Button } from "@components/Button/styles";
import { useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "./styles";
import { useRouter } from "next/router";

interface OptionsDropdown {
  label: string | JSX.Element;
  icon: JSX.Element | string;
  url: string;
  disabled?: boolean;
}
interface DropdownProps {
  label: string | JSX.Element;
  options: Array<OptionsDropdown>;
}

const DropdownMenu = ({ label, options }: DropdownProps) => {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);
  return (
    <DropdownContainer>
      <Button
        className="center fw-bold pr-10"
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
              <MenuItem className={item.disabled ? "disabled" : ""} key={index}>
                <MenuButton as="a" onClick={() => router.push(item.url)}>
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
