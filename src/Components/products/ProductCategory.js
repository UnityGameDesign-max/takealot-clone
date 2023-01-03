import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getProductsByCategory } from '../../services/products-service';
import ProductCard from './ProductCard';

function ProductCategory() {

  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    getProductsByCategory("electronics")
      .then(response => response.json())
      .then(products => setElectronics(products))

    getProductsByCategory("men's clothing")
      .then(response => response.json())
      .then(products => setJewelery(products))
  }, [])
  return (
    <ProductCategoryContainer>
      <ProductCategoryItem>
          <CategoryTitle>Recommended For You</CategoryTitle>
          <ProductCardItems>
            {electronics.map((item) => (
              <ProductCard 
                image={item.image} 
                description={item.title} 
                price={item.price} 
                rating={item.rating.rate} 
                count={item.rating.count}
              />
            ))}
          </ProductCardItems>

          <CategoryTitle>Electronics and Gaming</CategoryTitle>
          <ProductCardItems>
              {jewelery.map(item => (
                <ProductCard 
                  image={item.image} 
                  description={item.title} 
                  price={item.price} 
                  rating={item.rating.rate} 
                  count={item.rating.count}
                />
              ))}
          </ProductCardItems>
      </ProductCategoryItem>
      
    </ProductCategoryContainer>
  )
}

export default ProductCategory;

const CategoryTitle = styled.h2`
  font-size: 1.37rem;
  color: #4d4d4f;
  text-align: left;
`;
const ProductCategoryItem = styled.div`
  margin: 0 auto;
  width: 80%;

`;
const ProductCategoryContainer = styled.div`
  background-color: #f4f4f4;
  padding-block: 15px;
  height: max-content;
`;

const ProductCardItems = styled.div`
  display: flex;
`