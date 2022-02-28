import { Search, Label, ContainerInput, SearchIconContainer } from "./styles";

import SearchIcon from "@mui/icons-material/Search";

const FormSearch = (props: any) => {
  const { label, ...input } = props;
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <Search {...input} />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </ContainerInput>
  );
};

export default FormSearch;
