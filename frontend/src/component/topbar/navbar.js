import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #ffff;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
  position: absolute;
  right: 1300px;
  &:hover {
    color: black;
  }

`;

export const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 25px;
cursor: pointer;
&:hover {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  position: absolute;

  right: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;



  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 25px;
cursor: pointer;
&:hover {
  color: black;
}
`;
export const NavProfileLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 25px;
cursor: pointer;
&:hover {
  color: black;
}
`;