import { InputHTMLAttributes } from "react";
import { Input as InputForm, Label, ContainerInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: InputProps) => {
  const { label, ...input } = props;
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <InputForm {...input} />
    </ContainerInput>
  );
};

export default Input;
