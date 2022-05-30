import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import {
  DropdownButton,
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
  className?: string;
  label: string | JSX.Element;
  options: Array<OptionsDropdown>;
}

const DropdownMenu = ({ className, label, options }: DropdownProps) => {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  function useClickOutside(ref: any, open: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          open(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, open]);
  }

  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, setShowOptions);

  return (
    <DropdownContainer>
      <DropdownButton
        className={className}
        onClick={() => setShowOptions(!showOptions)}
      >
        {label}
      </DropdownButton>

      {showOptions && (
        <DropdownContent ref={dropdownRef}>
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
