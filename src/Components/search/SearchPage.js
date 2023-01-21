import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllProducts } from '../../services/products-service'
import Header from '../Header'
import Searching from './Searching';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SearchProductCard from './SearchProductCard'

function SearchPage() {
  const [products, setProducts] = useState([]);
  const productSearchKey = useParams();
  const productSearchView = productSearchKey?.searchValue;
  console.log(productSearchView)

  useEffect(() => {
      getAllProducts()
      .then(response => response.json())
      .then(products => setProducts(products))
  }, [])

  const isProductSearchEmpty = () => {
    return products.length > 0;
  }
  const getSearchKeys = (searchKeys, product) => {
    return product.title.toLowerCase().includes(searchKeys);
  }
  const filteredProducts = () => {
    const filterSearchKey = products.filter((product) => product.title.toLowerCase()?.includes(productSearchView.toLowerCase()) || product.category.toLowerCase()?.includes(productSearchView.toLocaleLowerCase()))
    return filterSearchKey;
  }

  console.log(filteredProducts());
      
  return (
    <Fragment>
        <Header />
        <Searching />
        <SearchContainer>
          <SearchProductCard filterProducts={filteredProducts()} searchKey={productSearchView}/>
        </SearchContainer>
    </Fragment>
  );
}
export default SearchPage;

const SearchContainer = styled.div`
  background-color: #f4f4f4;
  padding-block: 30px;
  height: 100vh;
`;

