import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllProducts } from '../services/products-service'
import Header from './Header'
import Searching from './Searching';
import { useParams } from 'react-router-dom';

function SearchPage() {
    const [products, setProducts] = useState([]);
    const productSearchKey = useParams();
    const productSearchView = productSearchKey.searchView;
    useEffect(() => {
        getAllProducts()
        .then(response => response.json())
        .then(products => setProducts(products))
    }, [])

    const isProductSearchEmpty = () => {
        return products.length > 0;
    }
  return (
    <Fragment>
        <Header />
        <Searching />
    </Fragment>
  )
}

export default SearchPage