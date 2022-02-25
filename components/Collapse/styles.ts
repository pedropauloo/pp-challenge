import styled from "@emotion/styled";

export const CollapseContainer = styled("div")<{ open: boolean }>`
  border: 2px solid ${({ open }) => (!open ? "#eaefed" : "#B5F1DD")};
  border-radius: 8px;
  margin: 8px 0;
  padding: 24px 16px;
`;

export const CollapseHeader = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const CollapseInfo = styled("div")`
  font-size: 16px;
  font-weight: 600;
  color: #587169;
`;

export const CollapseButton = styled("button")`
  border: none;
  background: transparent;
  color: #587169;
  &:hover {
    cursor: pointer;
  }
`;

export const CollpaseContent = styled("div")`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`;
