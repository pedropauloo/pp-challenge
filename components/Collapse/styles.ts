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

export const HeaderContent = styled("div")`
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

export const CollapseContent = styled("div")`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`;

export const CollapseBody = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const CollapseFooter = styled("div")`
  width: 100%;
  margin-top: 16px;
`;

export const CollapseSection = styled("section")`
  display: flex;
  width: 100%;

  div {
    width: 50%;
    margin: 10px 0;
  }
`;

export const SectionLabel = styled("span")`
  display: block;
  color: #587169;
  font-weight: 600;
  font-size: 12px;
`;

export const SectionItem = styled(SectionLabel)`
  font-weight: 400;
`;

