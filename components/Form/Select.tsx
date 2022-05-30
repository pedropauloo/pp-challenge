import { InputHTMLAttributes } from "react";
import {
  Select as SelectForm,
  Label,
  ContainerInput,
  ArrowContainer,
} from "./styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClasses?: string;
  label: string;
}

const Select = ({ label, containerClasses, ...props }: SelectProps) => {
  return (
    <ContainerInput className={containerClasses}>
      <Label>{label}</Label>
      <SelectForm {...props} />
      <ArrowContainer>
        <ArrowBackIosIcon style={{ transform: "rotate(-90deg)" }} />
      </ArrowContainer>
    </ContainerInput>
  );
};

export default Select;
