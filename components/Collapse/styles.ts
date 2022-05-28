import styled from "@emotion/styled";

export const CollapseHeader = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContent = styled("div")`
  font-size: 16px;
  font-weight: 600;
`;

export const CollapseButton = styled("button")`
  color: #587169;
  border: none;
  background: transparent;

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
  color: #587169;
  display: block;
  font-weight: 600;
  font-size: 12px;
`;

export const SectionItem = styled("span")`
  display: block;
  font-size: 12px;
  font-weight: 400;
`;

export const CollapseContainer = styled("div")<{
  open: boolean;
  disabled?: boolean;
}>`
  border: 2px solid ${({ open }) => (!open ? "#eaefed" : "#B5F1DD")};
  border-radius: 8px;
  margin: 8px 0;
  padding: 24px 16px;
  color: #587169;

  ${SectionItem}, img {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }
`;
