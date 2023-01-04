import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getProductsByCategory } from '../../services/products-service';
import Skeleton from '@mui/material/Skeleton';
import ProductCard from './ProductCard';

function ProductCategory() {

  const [clothing, setClothing] = useState([]);
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    getProductsByCategory("men's clothing")
      .then(response => response.json())
      .then(products => setClothing(products))

    getProductsByCategory("electronics")
      .then(response => response.json())
      .then(products => setElectronics(products))
  }, [])
  return (
    <ProductCategoryContainer>
      <ProductCategoryItem>
        <CategoryTitle>Recommended For You</CategoryTitle>
        <ProductCardItems>
          {clothing.length > 0 ? clothing.map((item) => (
            <ProductCard 
              image={item.image} 
              description={item.title} 
              price={item.price} 
              rating={item.rating.rate} 
              count={item.rating.count}
            />
          )) : 
          <SkeletonContainer>
            <Skeleton variant='text' height={90}/>
            <Skeleton animation="wave" sx={{ mr: 5}} variant="rectangular" width={'100%'} height={200} />
          </SkeletonContainer>
          }
          {clothing.length > 0 ? 
            <AdCards>
              <img width={'300px'} height={'308px'} src='https://tpc.googlesyndication.com/simgad/2326196280112959544?' alt='training-pic' />
            </AdCards>
          : 
          <SkeletonAdContainer>
            <Skeleton animation="wave" variant="rectangular" width={300} height={308} />
          </SkeletonAdContainer>
          }
        </ProductCardItems>

        <CategoryTitle>Electronics</CategoryTitle>
        <ProductCardItems>
          {electronics.length > 0 ? electronics.map(item => (
            <ProductCard 
              image={item.image} 
              description={item.title} 
              price={item.price} 
              rating={item.rating.rate} 
              count={item.rating.count}
            />
          )) 
          : 
            <SkeletonContainer>
              <Skeleton variant='text' height={90}/>
              <Skeleton animation="wave" sx={{ mr: 5}} variant="rectangular" width={'100%'} height={200} />
            </SkeletonContainer>
          }
          {electronics.length > 0 ?
            <AdCards>
              <img width={'300px'} height={'308px'} src='https://tpc.googlesyndication.com/simgad/9789611779522710991' alt='training-pic' />
            </AdCards>
            :
            <SkeletonAdContainer>
              <Skeleton animation="wave" variant="rectangular" width={300} height={308} />
            </SkeletonAdContainer>
          }
         
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
  width: 67%;

`;
const SkeletonContainer = styled.div`
  margin-right: 12px;
  width: 100%;
  background-color: #fff;
  padding: 12px 10px;
`;

const SkeletonAdContainer = styled.div`
  background-color: #fff;
  padding: 12px 10px;
`;
const AdCards = styled.div`
  border: 1px solid lightGrey;
  padding: 2.3px;
  height: 308px;
`
const ProductCategoryContainer = styled.div`
  background-color: #f4f4f4;
  padding-block: 15px;
  height: max-content;
`;

const ProductCardItems = styled.div`
  display: flex;
  justify-content: center;
`