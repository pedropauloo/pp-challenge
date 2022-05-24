import {
  Search as SearchForm,
  Label,
  ContainerInput,
  SearchIconContainer,
} from "./styles";

import SearchIcon from "@mui/icons-material/Search";

const Search = (props: any) => {
  const { label, ...input } = props;
  return (
    <ContainerInput>
      <Label>{label}</Label>
      <SearchForm {...input} />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </ContainerInput>
  );
};

export default Search;
