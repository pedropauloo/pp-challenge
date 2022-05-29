import { InputHTMLAttributes } from "react";
import {
  Search as SearchForm,
  Label,
  ContainerInput,
  SearchIconContainer,
} from "./styles";

import SearchIcon from "@mui/icons-material/Search";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Search = (props: SearchProps) => {
  const { label, className, ...input } = props;
  return (
    <ContainerInput className={className}>
      <Label>{label}</Label>
      <SearchForm {...input} />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </ContainerInput>
  );
};

export default Search;
