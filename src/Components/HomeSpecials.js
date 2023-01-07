import React from 'react'
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";



import Swiper from "react-id-swiper";



function HomeSpecials() {
    const IMAGE_SLIDES = [
        {url: "https://tpc.googlesyndication.com/simgad/8080339775404773055?"},
        {url: "https://tpc.googlesyndication.com/simgad/8380082073826093288?"},
        {url: "https://tpc.googlesyndication.com/simgad/15417026208848844066?"}
    ]
  return (
    <HomeSpecialContainer>
        <Sliders>
          <SimpleImageSlider 
            width={850} 
            height={300} 
            images={IMAGE_SLIDES} 
            showBullets={true} 
            showNavs={true} 
            autoPlayDelay={3} 
            autoPlay={true} 
          />
          <FeaturedBrands>
            <FeaturedBrandText>Featured Brands</FeaturedBrandText>
             
          </FeaturedBrands>
        </Sliders>
       
        <SpecialOrderingContainer>
          <Ordering>
            <TruckImage src="https://shopfront.takealot.com/b74df56f090e643ed9698a23190c34d2198de355/static/media/src/images/icon-delivery.svg-289ec5f71b25443056af.svg" alt='delivery-vehicle'></TruckImage>
            <OrderTypographyContainer>
              <OrderText>Where's my order?</OrderText>
              <OrderDescription>Check your delivery or collection status</OrderDescription>
            </OrderTypographyContainer>
          </Ordering>
          <DecemberSpecial>
            <DezemberImage width={'100%'} src="https://tpc.googlesyndication.com/simgad/5289936977719097682?" alt="dezember"></DezemberImage>
          </DecemberSpecial>
        </SpecialOrderingContainer>
    </HomeSpecialContainer>
  )
}

export const DecemberSpecial = styled.div`
  border: 1px solid lightGrey;
  margin-top: 12px;
  padding: 2.3px;
  width: 100%;
`;
const SpecialOrderingContainer = styled.div`
  margin-left: 20px;
`;

const DezemberImage = styled.img`
  
`;
const FeaturedBrands = styled.div``
const FeaturedBrandText = styled.h2`
  font-size: 16px;
  color: #4d4d4f;
  min-height: 24px;
  margin: 24px 0 4px
`
const Sliders = styled.div``

const TruckImage = styled.img`
  position: absolute;
  left: 0px;
  height: 50px;
  z-index: 1;
  width: 74px;
`;
const Ordering = styled.div`
  position: relative;
  display: flex;
  border: 1px solid lightGrey;
  padding: 7px 20px;
  background-color: rgba(127, 199, 245, 0.19);
`;

const OrderTypographyContainer = styled.div`
  text-align: left;
  margin-left: 60px;
`

const OrderText = styled.h4`
  margin-bottom: 4px;
  margin-top: 0;
`

const OrderDescription = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  color: #4d4d4f;
  width: 220px;
`
const HomeSpecialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 22px 20px;
  height: 470px;
  background-color: white;
`;
export default HomeSpecials;