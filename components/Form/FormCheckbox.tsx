import { useState } from "react";
import { Checkbox, CheckboxIcon, Checkmark } from "./styles";

const FormCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

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
