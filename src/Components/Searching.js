import React from "react";
import styled from "styled-components";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import {Search} from '@styled-icons/boxicons-regular/Search'

function Searching() {
  return (
    <SearchContainer>
      <SearchItems>
        <Departments>
          <Header as="a" href="#">
            Shop by Department
            <DownArrow></DownArrow>
          </Header>
        </Departments>
        <SearchProduct>
          <SearchBar placeholder="Search for products, brands...."></SearchBar>
          <DropDownSearch>
            <option>All Departments</option>
            <option>Baby & Toddler</option>
            <option>Beauty</option>
            <option>Books</option>
            <option>Cameras</option>
          </DropDownSearch>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchProduct>
      </SearchItems>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
    width : 100%;
    padding 13px 0px;
    background-color: #0b79bf;
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

const SearchBar = styled.input`
  border: none;
  width: 81%;
  font-weight: 400;
  outline-width: 0;
`;

const SearchButton = styled.button`
  border: none;
  width: 4%;
  padding-block: 7px;
  padding-inline: 13px;
  cursor: pointer;
  background-color: #4d4d4f;
  border-radius: 3px;
`;

const SearchProduct = styled.form`
  width: 85%;
  display:flex;
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
`;

const Header = styled.a`
  color: white;
  font-size: 14px;
  background-color: #4d4d4f;
  padding: 7px 10px;
  border-radius: 3px;
  text-decoration: none;
  &:hover {
    background-color: #434345;
  }
`;

const SearchItems = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  max-width: 1440px;
`;

export default Searching;
