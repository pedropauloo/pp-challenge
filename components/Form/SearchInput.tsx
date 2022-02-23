import {
  Input as InputForm,
  Label,
  ContainerInput,
  SearchIconContainer,
} from "./styles";

import SearchIcon from "@mui/icons-material/Search";

const SearchInput = (props: any) => {
  const { label, ...input } = props;
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <InputForm {...input} />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </ContainerInput>
  );
};

export default SearchInput;
