import React from "react";
import Logo from "../assets/takealot.png";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { CartFill } from "@styled-icons/bootstrap/CartFill";
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
      <NavBarLeft>
        <HeaderLogo></HeaderLogo>
        <HeaderLink as="a" href="/">
          Help
        </HeaderLink>
        <HeaderLink as="a" href="/">
          Sell on Takealot
        </HeaderLink>
      </NavBarLeft>

      <NavBarRight>
        <ul>
          <HeaderLink>Login</HeaderLink>
          <HeaderLink>Register</HeaderLink>
          <HeaderLink>Orders</HeaderLink>
          <HeaderLink>My Account</HeaderLink>
          <WishListIcon as="a" href="/">
            <FavIcon />
          </WishListIcon>
          <CartIcon as="a" href="#">
            <BasketIcon />
            <BasketCount>{0}</BasketCount>
          </CartIcon>
        </ul>
      </NavBarRight>
    </NavBar>
  );
}

const FavIcon = styled(HeartFill)`
  color: white;
  width: 14px;
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 18px;
  text-decoration: none;
  background-color: #1c8644;
  margin-right: 10px;
  border-radius: 17px;
`;
const BasketIcon = styled(CartFill)`
  width: 15px;
  margin-right: 4px;
  color: white;
`;

const BasketCount = styled.p`
 margin: 0;
 margin-top:3px;
 color: white;
 font-size: 12px;
 font-weight: bold;
`

const WishListIcon = styled.a`
  padding: 6px 8px;
  background-color: #f4697a;
  margin-right: 10px;
  border-radius: 50%;
  &:hover {
    background-color: #f4697a;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px 60px;
  max-width: 1540px;
  background-color: white;
`;

const HeaderLink = styled.a`
  font-size: 13px;
  font-weight: 300;
  margin-inline: 17px;
  color: #4d4d4f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #0b79bf;
    cursor: pointer;
  }
`;

const HeaderLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  width: 160px;
  margin-right: 10px;
`;

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavBarRight = styled.div`
ul{
  display: flex;
  margin:0;
  align-items: center;
}
`;

export default Header;
