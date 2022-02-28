import { useState } from "react";
import { Checkbox, CheckboxIcon, Checkmark } from "./styles";

const FormCheckbox = ({ checked }: any) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label>
      <Checkbox
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <Checkmark checked={isChecked}>
        <CheckboxIcon />
      </Checkmark>
    </label>
  );
};

export default FormCheckbox;
