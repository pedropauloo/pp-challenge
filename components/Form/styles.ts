import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";

export const FormComponent = styled("form")`
  width: 100%;
`;

export const Input = styled("input")`
  font-size: 16px;
  border: 2px solid #cad6d1;
  -webkit-text-fill-color: #587169;
  color: #587169;
  border-radius: 8px;
  background: #fff;
  padding: 16px;
  width: 100%;
  font-weight: 500;

  &:disabled {
    background: #f5faf8;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    border-color: #b5f1dd;
  }

  &:disabled {
    opacity: 1;
    background-color: #f5faf8;
  }
`;

export const Search = styled(Input)`
  padding: 16px 16px 16px 40px;
`;

export const Select = styled(Input)`
  display: block;
`;

export const Label = styled("label")`
  top: 0;
  color: #a3b8b0;
  line-height: 2px;
  left: 16px;
  background: #ffffff;
  position: absolute;
  font-size: 14px;
  padding: 0 5px;
`;

export const ContainerInput = styled("div")`
  width: 100%;
  position: relative;
  min-width: 250px;
`;

export const SearchIconContainer = styled("div")`
  color: #587169;
  position: absolute;
  top: 19px;
  left: 16px;
`;
export const ArrowContainer = styled("div")`
  color: #587169;
  position: absolute;
  top: 13px;
  right: 16px;
`;

export const CheckboxContainer = styled("label")`
  display: inline-block;
`;

export const Checkbox = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxIcon = styled(CheckIcon)`
  height: 16px;
  width: 16px;
`;

export const Checkmark = styled("span")<{ checked: boolean }>`
  border-radius: 6px;
  display: block;
  height: 20px;
  width: 20px;
  border: 2px solid ${({ checked }) => (checked ? "#1DD195" : "#CAD6D1")};
  background: ${({ checked }) => (checked ? "#1DD195" : "#fff")};
  color: ${({ checked }) => (checked ? "#fff" : "transparent")};
`;
