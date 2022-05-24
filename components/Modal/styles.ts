import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const openAnimation = keyframes`
  from, 0%  {
    transform: translateY(100vh);
  }

  to, 100%{
    transform: translateY(0);
  }
`;

const closeAnimation = keyframes`
  from, 0%  {
    transform: translateY(0);
  }
  
  to, 100%{
    transform: translateY(100vh);
  }
`;

const openOpacityAnimation = keyframes`
  from, 0%  {
    opacity: 0;
  }

  to, 100%{
    opacity: 1;
  }
`;

const closeOpacityAnimation = keyframes`
  from, 0%  {
    opacity: 1;
  }
  
  to, 100% {
    opacity: 0;
  }
`;

export const ContainerModal = styled("div")`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Wrapper = styled("div")<{ open: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  animation: ${(props) =>
      props.open ? openOpacityAnimation : closeOpacityAnimation}
    0.5s ease-in-out;
`;

export const Content = styled("div")<{ open: boolean }>`
  position: relative;
  z-index: 1;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 12px 12px 0 0;
  padding: 32px 24px;
  width: 90%;
  background: #ffffff;
  animation: ${(props) => (props.open ? openAnimation : closeAnimation)} 0.5s
    ease-in-out;
`;

export const CloseButton = styled("button")`
  top: 34px;
  right: 32px;
  position: absolute;
  color: #587169;
  border: none;
  background: transparent;
`;

export const ModalSection = styled("div")`
  margin-top: 10px;
`;

export const Menu = styled("nav")``;

export const MenuContainer = styled("ol")`
  list-style: none;
  margin-top: 10px;
`;

export const MenuItem = styled("li")``;

export const MenuButton = styled("button")`
  background: transparent;
  width: 100%;
  border: none;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #587169;

  &:hover {
    font-weight: 600;
  }
`;
