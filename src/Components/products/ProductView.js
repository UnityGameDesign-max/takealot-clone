import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../Header';
import Searching from '../Searching';
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import {Link, useParams } from 'react-router-dom';
import { getProductsById } from '../../services/products-service';
import StarIcon from '@mui/icons-material/Star';
import { CartFill } from "@styled-icons/bootstrap/CartFill";
import { Divider } from '@mui/material';

function ProductView() {
    const [productView, setProductView] = useState({});

    const productParameters = useParams();
    const productId = productParameters.id;
    useEffect(() => {
        getProductsById(productId)
            .then((response) => response.json())
            .then(product => setProductView(product))
    },[productId])
    console.log(productView);
  return (
    <React.Fragment>
        <Header />
        <Searching />
        <ProductViewingContainer>
            <ProductContainer>
                <ProductItem>
                    
                    <ProductItemImage src={productView.image} alt="product-view-img"></ProductItemImage>
                    
                    <ProductTextContainer>
                        <ProductItemText>{productView.title}</ProductItemText>
                        <ProductRate>
                            <StarIcon sx={{ width: 18, color: 'gold', mr: 1 }}/>
                            <Rating>{productView.rating?.rate}</Rating>
                        </ProductRate>

                        <Divider />
                        <ShippingDetails>
                            <ShippingText>Ships in 5 - 7 working days</ShippingText>
                            <Rating>
                                Sold By
                                <FullFillText>Takealot-clone</FullFillText>
                            </Rating>
                        </ShippingDetails>
                        <Divider />
                        <ul>
                            <ListItems>Eligible for next-day delivery or collection.</ListItems>
                            <ListItems>Eligible for Cash on Delivery</ListItems>
                            <ListItems>Hassle-Free Exchanges & Returns for 30 Days</ListItems>
                            <ListItems>6-Month Limited Warranty.</ListItems>
                        </ul>
                    </ProductTextContainer>
                    
                </ProductItem>
                <ProductPriceContainer>
                    <OrderPriceCard>
                        <Price>R {productView.price}</Price>
                        <eBucks>eB2,990 Discovery Miles 2,990</eBucks>
                        <AddCart>
                            <BasketIcon />
                            Add to Cart
                        </AddCart>
                        <AddWishList>
                            <FavIcon />
                            Add to List
                        </AddWishList>
                    </OrderPriceCard>
                    <AdCard>
                        <img width="100%" src="https://tpc.googlesyndication.com/simgad/1405391094094514089" alt="ad-order-product"/>
                    </AdCard>
                </ProductPriceContainer>
            </ProductContainer>
            
        </ProductViewingContainer>
    </React.Fragment>
  )
}

export default ProductView;
const ProductItemImage = styled.img`
    width: 42%;
    border: 1px solid lightgray;
    padding: 19px 40px;
`;

const AddCart = styled.button`
    display: block;
    margin-block: 5px;
    padding: 12px 13px;
    width: 100%;
    border: none;
    background-color: #1c8644;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #114f28;
    }
`;

const AddWishList = styled.button`
    width: 100%;
    border: none;
    padding: 12px 13px;
    color: #4d4d4f;
    cursor: pointer;
    &:hover {
        background-color: #cdcdcd;
    }
`;
const FavIcon = styled(HeartFill)`
  color: #f4697a;
  width: 14px;
  margin-right: 4px;
`;
const BasketIcon = styled(CartFill)`
  width: 13px;
  margin-right: 4px;
  margin-bottom: 4px;
  color: white;
`;
export const eBucks = styled.p`
    display: block;
`;
const OrderPriceCard = styled.div`
    background-color: #fff;
    padding: 20px 20px 25px;
    height: 200px;
`;
const Price = styled.span`
    font-weight: bold;
    font-size: 36px;
    display: inline;
`;
const AdCard = styled.div`
    padding: 3px;
    background-color: #fff;
    margin-top: 20px;
`

const FullFillText = styled(Link)`
    margin-left: 4px;
    text-decoration: none;
    color: #0b79bf;
`;
const ShippingText = styled.span`
    font-size: 1.09rem;
    color: #000;
    font-weight: bold;
    padding-bottom: 13px;
`;

const ListItems = styled.li`
    font-size: .92308rem;
    color: #4d4d4f;
    padding: 0px 0px 7px 9px;
`;

const ShippingDetails = styled.div`
    padding-block: 18px;
    display: flex;
    flex-direction: column;
`;
const ProductRate = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
`;

const Rating = styled.p`
    color: #4d4d4f;
    margin: 0px;
    font-size: 15px;
`
const ProductItemText = styled.h1`
    color: #4d4d4f;
    font-size: 1.5384rem;
    font-weight: 500;
    margin: 0 0 5px 0;
`;
const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
`
const ProductTextContainer = styled.div`
    width: 60%;
    padding-inline: 20px;

`;
const ProductViewingContainer = styled.div`
    height: 100vh;
    background-color: #f4f4f4;
    padding-block: 30px ;
`;

const ProductItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 19px 20px;
    width: 62%;
    background-color: #fff;
    margin-right: 30px;
`;

const ProductPriceContainer = styled.div`
    width: 19%;
`;

