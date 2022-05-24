import { Input as InputForm, Label, ContainerInput } from "./styles";

const Input = (props: any) => {
  const { label, ...input } = props;
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <InputForm {...input} />
    </ContainerInput>
  );
};

export default Input;
