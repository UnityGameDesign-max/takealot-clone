import React from 'react'
import styled from 'styled-components';
import { CartFill } from "@styled-icons/bootstrap/CartFill";
import { Link } from 'react-router-dom';

function SearchProductCard({searchKey, filterProducts}) {
  return (
    <SearchContainer>
      <SearchResultsText> {filterProducts.length} results for {`"${searchKey}"`}</SearchResultsText>
      <SearchCardContainer>
        {filterProducts.map((product) => (
          <LinkSearchCard to={`/${product.category}/${product.id}`}>
            <SearchCard>
              <SearchImage src={product.image} alt="product-img"></SearchImage>
              <SearchTitle>{product.title}</SearchTitle>
              <SearchPrice>R {product.price}</SearchPrice>
              <AddCartButton>
                <BasketIcon />
                Add to Cart
              </AddCartButton>
            </SearchCard>
          </LinkSearchCard>
        ))}
      </SearchCardContainer>
    </SearchContainer>
  )
}

export default SearchProductCard;

const BasketIcon = styled(CartFill)`
  width: 13px;
  margin-right: 4px;
  margin-bottom: 4px;
  color: #1c8644;
`;
const LinkSearchCard = styled(Link)`
  text-decoration: none;
  flex: 0 0 345px;

`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SearchTitle = styled.p`
  color: #4d4d4f;
  width: 320px;
`;
const SearchPrice = styled.span`
  color: black;
  font-weight: bold;
  margin-top: auto;
`;

const SearchCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const AddCartButton = styled.button`
  display: block;
  margin-block: 5px;
  padding: 12px 13px;
  margin-top: auto;
  width: 100%;
  font-weight: 600;
  border-style: solid;
  background-color: #fff;
  border-color: #1c8644;
  cursor: pointer;
  color: #1c8644;
  &:hover {
    color: #fff;
    background-color: #1c8644;
    ${BasketIcon}{
      color: #fff;
    }
  }
  
`;
const SearchCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #fff;
  padding: 20px 17px;
  height: 330px;
  margin-right: 10px;
`;
const SearchResultsText = styled.p`
  color: #4d4d4f;
  font-size: 1.07692rem;
  font-weight: 500;
`;
const SearchImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 190px;
  aspect-ratio: 3/2;
  object-fit: contain;
`;