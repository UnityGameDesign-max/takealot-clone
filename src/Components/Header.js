import React, { Fragment, useState } from "react";
import Logo from "../assets/takealot.png";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { CartFill } from "@styled-icons/bootstrap/CartFill";
import { navigationListLeft } from "../utilis/navItems";
import Login from './auth/Login';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import CovidUpdatesHeader from "./CovidUpdatesHeader";
import RegisterUser from "./auth/RegisterUser";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/reducers/userReducer";

function Header() {

  const userInfo = useSelector(state => state.userReducer.user.user?.userInfo);
  console.log(userInfo);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const dispatch = useDispatch();

  const SignOut = () => {
    dispatch(removeUser(userInfo))
  }
  return (
    <Fragment>
      <CovidUpdatesHeader />
      <NavBar>
        <NavBarLeft>
          <HeaderLogo></HeaderLogo>
          {navigationListLeft.map(item => (
            <HeaderLink to={item.location} key={item.id}>
              {item.name}
            </HeaderLink>
          ))}
        </NavBarLeft>
        <NavBarRight>
          <ul>
            {userInfo ?
              <React.Fragment>
                <Greeting>Hi {userInfo}</Greeting>
                <HeaderLink onClick={() => SignOut()}>(that's not me)</HeaderLink>
                <HeaderLink onClick={() => SignOut()}>Logout</HeaderLink>
              </React.Fragment>
              :
            <React.Fragment>
              <HeaderLink onClick={() => setOpenLoginModal(true)} to='/'>Login</HeaderLink>
              <HeaderLink onClick={() => setOpenRegisterModal(true)} to='/'>Register</HeaderLink>
            </React.Fragment>
            }
            <HeaderLink to='/'>Orders</HeaderLink>
            <HeaderLink to="/account">My Account</HeaderLink>
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
      <Login 
        openModal={openLoginModal} 
        setOpenRegisterModal={setOpenRegisterModal}
        setOpenModal={setOpenLoginModal}
      />
      <RegisterUser 
        setOpenLoginModal={setOpenLoginModal} 
        openModal={openRegisterModal} 
        setOpenModal={setOpenRegisterModal}
      />
    </Fragment>
  );
}

const FavIcon = styled(HeartFill)`
  color: white;
  width: 14px;
`;
const Greeting = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: #4d4d4f;
`;
const CartIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  text-decoration: none;
  background-color: #1c8644;
  margin-right: 10px;
  border-radius: 17px;
  &:hover {
    background-color: #114f28;
  }
`;
const BasketIcon = styled(CartFill)`
  width: 13px;
  margin-right: 4px;
  color: white;
`;

const BasketCount = styled.p`
  margin: 0;
  margin-top: 3px;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const WishListIcon = styled.a`
  padding: 6px 8px;
  background-color: #f4697a;
  margin-right: 10px;
  border-radius: 50%;
  &:hover {
    background-color: #d95767;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  padding: 16px 0;
  max-width: 1440px;
  background-color: white;
`;

const HeaderLink = styled(Link)`
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
  ul {
    display: flex;
    margin: 0;
    align-items: center;
  }
`;

export default Header;
