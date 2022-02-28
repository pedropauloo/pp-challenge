import Navbar from "@components/Navbar/Navbar";
import { NextPage } from "next";
import { Background, Content } from "./styles";

const Layout: NextPage = ({ children }: any) => {
  return (
    <Background>
      <Navbar />
      <Content>{children}</Content>
    </Background>
  );
};

export default Layout;
