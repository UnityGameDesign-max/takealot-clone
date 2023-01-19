import React from 'react'
import styled from 'styled-components';

function SearchProductCard() {
  return (
    <SearchCard>
        <SearchImage src={"https://media.takealot.com/covers_tsins/29390175/6001773104098-1-pdpxl.jpg"} alt="product-img"></SearchImage>
    </SearchCard>
  )
}

export default SearchProductCard;

const SearchCard = styled.div`
    display: flex;
    justify-content: center;
    
`;

const SearchImage = styled.img`
    width: 180px;
    aspect-ratio: 3/2;
    object-fit: contain;
`;