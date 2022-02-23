import styled from "@emotion/styled";

export const NavbarContainer = styled("nav")`
  padding: 16px;
  background: #FFFFFF;
  border-bottom: 2px solid #eaefed;

  nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    nav {
      align-items: center;
      width: 50%;
      flex-direction: row;
    }
  }
`;

export const Avatar = styled("img")`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const LogoContainer = styled("div")`
  position: relative;
  width: 32px;
  height: 32px;

  @media screen and (max-width: 600px) {
    transform: translateX(50%);
    width: 42px;
    height: 42px;
  }
`;
