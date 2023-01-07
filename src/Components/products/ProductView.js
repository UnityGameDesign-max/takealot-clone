import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../Header';
import Searching from '../Searching';
import {useParams } from 'react-router-dom';
import { getProductsById } from '../../services/products-service';

function ProductView() {
    const [productView, setProductView] = useState({});

    const productParameters = useParams();
    const productId = productParameters.id;
    useEffect(() => {
        getProductsById(productId)
            .then((response) => response.json())
            .then(product => setProductView(product))
    },[productId])

  return (
    <React.Fragment>
        <Header />
        <Searching />
        <ProductViewingContainer>
            <ProductContainer>
                <ProductItem>
                    <ProductItemImage src={productView.image} alt="product-view-img">
                    </ProductItemImage>
                </ProductItem>
                <ProductPriceContainer>
                
                </ProductPriceContainer>
            </ProductContainer>
            
        </ProductViewingContainer>
    </React.Fragment>
  )
}

export default ProductView;
const ProductItemImage = styled.img`

`
const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ProductViewingContainer = styled.div`
    height: 100vh;
    background-color: #f4f4f4;
`;

const ProductItem = styled.div`
    width: 1000px;
    background-color: #fff;
    height: 500px;
`;

const ProductPriceContainer = styled.div`

`;