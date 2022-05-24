import styled from "@emotion/styled";
export const ResponsiveTableContent = styled("div")`
  overflow-x: auto;
`;

export const Table = styled("table")`
  width: 100%;
  border: none;
  border-spacing: 0;
  font-size: 12px;
  color: #587169;
`;
export const TableHead = styled("thead")`
  text-align: left;
`;
export const TableRow = styled("tr")``;
export const TableHeadData = styled("th")`
  padding: 16px;
  border-color: #cad6d1;
  border-style: solid;
  border-width: 1px 0 1px 0;
  font-weight: 600;
  &:first-child {
    border-left: 1px solid #cad6d1;
    border-radius: 10px 0 0 0;
  }

  &:last-child {
    border-right: 1px solid #cad6d1;
    border-radius: 0 10px 0 0;
  }
`;
export const TableBody = styled("tbody")`
  text-align: left;
`;
export const TableData = styled("td")`
  border-bottom: 1px solid #eaefed;
  padding: 16px;
  font-weight: 500;
`;
