import {
  Select as SelectForm,
  Label,
  ContainerInput,
  ArrowContainer,
} from "./styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const FormSelect = ({ label, content }: any) => {
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <SelectForm>{content}</SelectForm>
      <ArrowContainer>
        <ArrowBackIosIcon style={{ transform: "rotate(-90deg)" }} />
      </ArrowContainer>
    </ContainerInput>
  );
};

export default FormSelect;
