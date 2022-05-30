import { Label, RoleName } from "@components/Layout/styles";

interface HeaderCollapseProps {
  children?: any;
  className?: string;
  roleName?: string;
}

export const HeaderCollapse = ({ roleName }: HeaderCollapseProps) => {
  return (
    <>
      <Label>Cargo</Label>
      <RoleName>{roleName}</RoleName>
    </>
  );
};
