import { PageHeader } from "./styles";

const Page = ({ children }: any) => {
  return <>{children}</>;
};

const Header = ({ children }: any) => {
  return <PageHeader>{children}</PageHeader>;
};

Page.Header = Header;

const Body = ({ children }: any) => {
  return <>{children}</>;
};

Page.Body = Body;

export default Page;
