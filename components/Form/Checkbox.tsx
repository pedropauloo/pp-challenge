import { useState } from "react";
import {
  Checkbox as CheckboxForm,
  CheckboxIcon,
  Checkmark,
} from "./styles";

const Checkbox = ({ checked }: any) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label>
      <CheckboxForm
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

export default Checkbox;
