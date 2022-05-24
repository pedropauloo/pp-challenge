import { PageHeader } from "./styles";

const Page = ({ children }: any) => {
  return <div>{children}</div>;
};

const Header = ({ children }: any) => {
  return <PageHeader>{children}</PageHeader>;
};

Page.Header = Header;

const Body = ({ children }: any) => {
  return <div>{children}</div>;
};

Page.Body = Body;

export default Page;
