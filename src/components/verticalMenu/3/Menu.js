import styled, { keyframes } from "styled-components";

const moveFadeIn = keyframes`
  0% {
    opacity: 0;
    margin-right: 10px;
  }

  100% {
    opacity: 1;
    margin-right: 0px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
`;

const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-tiems: center;

  color: black;
  padding: 13px 16px;
  border-bottom: 1px solid #ebebeb;
  transition: all 0.2s ease-in-out;

  svg {
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);

    svg {
      animation: ${moveFadeIn} 500ms forwards;
    }
  }
`;

const MenuItem = ({ children }) => {
  return <MenuItemContainer>{children}</MenuItemContainer>;
};

const Menu = ({ children }) => {
  return <MenuContainer>{children}</MenuContainer>;
};

Menu.Item = MenuItem;

export default Menu;
