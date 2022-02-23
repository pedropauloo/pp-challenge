import Navbar from "@components/Navbar/Navbar";
import { NextPage } from "next";
import { Background } from "./styles";

const Layout: NextPage = ({ children }: any) => {
  return (
    <Background>
      <Navbar />
      {children}
    </Background>
  );
};

export default Layout;
