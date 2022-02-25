import styled from "@emotion/styled";

export const Button = styled("button")<{
  contentPosition: string;
  fontWeight: string;
}>`
  display: flex;
  justify-content: ${({ contentPosition }) => contentPosition};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 16px;
  padding: 13px 20px;
  background: #ffffff;
  border: 2px solid #cad6d1;
  color: #587169;
  border-radius: 8px;
  width: 100%;

  :hover {
    cursor: pointer;
    border-color: #b5f1dd;
  }
`;

export const BackButton = styled("button")`
  border: none;
  width: 32px;
  height: 32px;
  padding: 5px;
  background: #eaefed;
  border-radius: 50%;
  color: #34423d;
`;
