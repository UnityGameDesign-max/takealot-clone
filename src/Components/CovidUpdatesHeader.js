import React, { useState } from "react";
import styled from "styled-components";

function CovidUpdatesHeader() {
  const [showCovidSite, setShowCovidSite] = useState(true);

    const handleClose = (event) => {
      event.preventDefault();
      setShowCovidSite(!showCovidSite);
    }

  return (
    showCovidSite &&
      <Header>
        <span>Stay informed!</span> Visit the SA Department of Health's website for COVID-19
          updates: 
          <a href="https://www.sacoronavirus.co.za" rel="noreferrer" target="_blank">
            www.sacoronavirus.co.za
          </a>
          <Close onClick={handleClose}>&times;</Close>
      </Header>
  );
}

const Close = styled.span`
  float:right;
  cursor: pointer;
  font-size:17px;
  margin-right: 10px;
`;

const Header = styled.div`
  background-color: #0b79bf;
  color: white;
  font-size: 13px;
  padding-block: 12px;
  font-weight: 400;
  text-align: center;
  span{
      font-weight: bold;
  }
  a{
    color: white;
  }
`;

export default CovidUpdatesHeader;
