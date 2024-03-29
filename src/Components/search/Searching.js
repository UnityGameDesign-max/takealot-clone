import React from "react";
import styled from "styled-components";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { headerDepartments } from "../../utilis/departments";
import { selectorDepartments } from "../../utilis/departments";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Searching() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const searchProducts = () => {
    navigate(`/search/${searchValue}`)
  }
  return (
    <SearchContainer>
      <SearchItems>
        <Departments>
          <Header as="a" href="#">
            Shop by Department
            <DownArrow></DownArrow>
          </Header>
        </Departments>
        <SearchRight>
          <SearchProduct>
            <SearchBar value={searchValue} onChange={(event)=> setSearchValue(event.target.value)} placeholder="Search for products, brands...."></SearchBar>
            <DropDownSearch value={searchValue} onChange={(event)=> setSearchValue(event.target.value)}>
              {headerDepartments.map(item => {
                return <option key={item.id}>{item.name}</option>;
              })}
            </DropDownSearch>
            <SearchButton onClick={searchProducts}>
              <SearchIcon />
            </SearchButton>
          </SearchProduct>
          <SearchDepartment>
            {selectorDepartments.map((item)=>(
              <NavigationLink to={`/search/${item.name}`} key={item.id}>
                {item.name}
              </NavigationLink>
            ))}
          </SearchDepartment>
        </SearchRight>
      </SearchItems>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width : 100%;
  padding 13px 0px;
  background-color: #0b79bf;
`;

const NavigationLink = styled(Link)`
  border: none;
  padding: 3px 18px;
  color: #333333;
  background-color: #f4f4f4;
  font-size: 14px;
  text-decoration: none;
  border-left: 0.8px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #e3e3e3;
  }
`;

const SearchDepartment = styled.div`
  display: flex;
  width: 100%;
`;

const DropDownSearch = styled.select`
  background-color: #f4f4f4;
  width: 14%;
  border: none;
  padding-inline: 3px;
  box-shadow: none;
  transition: background-color 300ms;
  font-weight: 400;
  outline-width: 0;
  font-size: 13px;
`;

const SearchRight = styled.div`
  width: 85%;
`;

const SearchBar = styled.input`
  border: none;
  width: 81%;
  font-weight: 400;
  outline-width: 0;
  padding-left: 10px;
`;

const SearchButton = styled.button`
  border: none;
  width: 4%;
  padding-block: 7.1px;
  padding-inline: 13px;
  cursor: pointer;
  background-color: #4d4d4f;
  border-radius: 2px;
`;

const SearchProduct = styled.form`
  margin-bottom: 10px;
  display: flex;
`;

const DownArrow = styled(ArrowIosDownward)`
  width: 17px;
  margin-left: 16px;
`;
const SearchIcon = styled(Search)`
  width: 15px;
  color: white;
`;
const Departments = styled.div`
  width: 18%;
  margin-top: 7px;
`;

const Header = styled.a`
  color: white;
  font-size: 14px;
  background-color: #4d4d4f;
  padding: 8px 10px;
  border-radius: 3px;
  text-decoration: none;
  &:hover {
    background-color: #434345;
  }
`;

const SearchItems = styled.div`
  display: flex;
  align-items: start;
  width: 80%;
  margin: 0 auto;
  max-width: 1440px;
`;

export default Searching;
