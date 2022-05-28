import {
  Select as SelectForm,
  Label,
  ContainerInput,
  ArrowContainer,
} from "./styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Select = ({ label, ...props }: any) => {
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
