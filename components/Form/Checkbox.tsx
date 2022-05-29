import { InputHTMLAttributes, useState } from "react";

import {
  Checkbox as CheckboxForm,
  CheckboxContainer,
  CheckboxIcon,
  Checkmark,
} from "./styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  label: string;
}

const Checkbox = ({ checked, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <CheckboxContainer>
      <CheckboxForm
        {...props}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <Checkmark checked={isChecked}>
        <CheckboxIcon />
      </Checkmark>
    </CheckboxContainer>
  );
};

export default Checkbox;
