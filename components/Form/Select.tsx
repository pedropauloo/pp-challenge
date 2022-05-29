import { InputHTMLAttributes } from "react";
import {
  Select as SelectForm,
  Label,
  ContainerInput,
  ArrowContainer,
} from "./styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Select = ({ label, ...props }: SelectProps) => {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <SelectForm {...props} />
      <ArrowContainer>
        <ArrowBackIosIcon style={{ transform: "rotate(-90deg)" }} />
      </ArrowContainer>
    </ContainerInput>
  );
};

export default Select;
