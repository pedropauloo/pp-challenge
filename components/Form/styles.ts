import styled from "@emotion/styled";

export const Input = styled("input")`
  border: 2px solid #cad6d1;
  color: #587169;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  padding: 16px 16px 16px 40px;
  width: 100%;
  font-weight: 500;

  &:focus,
  &:focus-visible {
    outline: none;
    border-color: #b5f1dd;
  }
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
  position: relative;
  margin: 32px 0;
  min-width: 250px;
`;
export const SearchIconContainer = styled("div")`
  color: #587169;
  position: absolute;
  top: 16px;
  left: 16px;
`;
