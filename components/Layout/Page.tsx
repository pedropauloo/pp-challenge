import { PageHeader } from "./styles";

interface PageProps {
  className?: string;
  children: any;
}

const Page = ({ className, children }: PageProps) => {
  return <div className={className}>{children}</div>;
};

const Header = ({ className, children }: PageProps) => {
  return <PageHeader className={className}>{children}</PageHeader>;
};

Page.Header = Header;

const Body = ({ className, children }: PageProps) => {
  return <div className={className}>{children}</div>;
};

Page.Body = Body;

export default Page;
