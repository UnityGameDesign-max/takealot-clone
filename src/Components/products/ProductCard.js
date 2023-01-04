import React from 'react'
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

function ProductCard({image, description, price, rating, count}) {
  return (
    <ProductCardContainer>
        <ProductImage  src={image} alt='product' />
        <ProductDescription>{description}</ProductDescription>
        <PriceContainer>
            <ProductPrice>R {price}</ProductPrice>
            <Ratings>
                <StarIcon sx={{ width: 15, color: 'gold', mr: 1 }}/>
                <Rate>{rating}</Rate> <Count>({count})</Count>
            </Ratings>
        </PriceContainer>
    </ProductCardContainer>
  )
}

export default ProductCard;

const ProductCardContainer = styled.div`
    padding: 16px 20px;
    background-color: #fff;
    margin-bottom: 10px;
    margin-right: 15px;
    width: 180px;
`;
const Rate = styled.span`
    color: #4d4d4f;
    font-size: 14px;
    margin-right: 3px;
`;
const Count = styled.span`
    color: #4d4d4f;
    font-size: 14px;
`;
const ProductImage = styled.img`
    height: auto;
    max-height: 130px;
    width: auto;
    max-width: 130px;
`;

const PriceContainer = styled.div`
`;

const ProductDescription = styled.p`
    color: #4d4d4f;
    width: 180px;
`;
const Ratings = styled.div`
    display: flex;
    align-items: center;
`;
const ProductPrice = styled.h4`
    margin-top: 2px;

`;