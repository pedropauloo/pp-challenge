import { InputHTMLAttributes } from "react";
import { Input as InputForm, Label, ContainerInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClasses?: string;
  label: string;
}

const Input = (props: InputProps) => {
  const { label, containerClasses, ...input } = props;
  return (
    <ContainerInput className={containerClasses}>
      <Label>{label}</Label>
      <InputForm {...input} />
    </ContainerInput>
  );
};

export default Input;
