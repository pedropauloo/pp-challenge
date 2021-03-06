import styled from "@emotion/styled";
import CachedIcon from "@mui/icons-material/Cached";

export const Button = styled("button")`
  display: flex;
  font-size: 16px;
  padding: 13px 20px;
  background: #ffffff;
  border: 2px solid #cad6d1;
  color: #587169;
  border-radius: 8px;
  margin: 20px 0;
  width: 100%;
  :hover {
    cursor: pointer;
    border-color: #b5f1dd;
  }
`;

export const ActionButton = styled(Button)`
  margin-bottom: 0;
`;

export const LoadMoreIcon = styled(CachedIcon)`
  color: #1dd195;
  margin-right: 8px;
`;

export const BackButton = styled("button")<{
  rounded: string;
}>`
  border: none;
  width: 32px;
  height: 32px;
  padding: 5px;
  background: #eaefed;
  border-radius: ${({ rounded }) => rounded};
  color: #34423d;
  margin-right: 14px;

  :hover {
    background: #d5d7d6;
    cursor: pointer;
    border-color: #b5f1dd;
  }
`;
