import { Label, RoleName } from "@components/Layout/styles";

export const HeaderCollapse = ({ roleName }: any) => {
  return (
    <>
      <Label>Cargo</Label>
      <RoleName>{roleName}</RoleName>
    </>
  );
};
