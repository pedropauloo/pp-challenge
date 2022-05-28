import { useState } from "react";
import { Checkbox as CheckboxForm, CheckboxContainer, CheckboxIcon, Checkmark } from "./styles";

const Checkbox = ({ checked }: any) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <CheckboxContainer>
      <CheckboxForm
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
