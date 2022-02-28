import { Input, Label, ContainerInput, ArrowContainer } from "./styles";

const FormInput = (props: any) => {
  const { label, ...input } = props;
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <Input {...input} />
    </ContainerInput>
  );
};

export default FormInput;
