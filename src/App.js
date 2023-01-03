import React from 'react';
import './App.css';
import Header from './Components/Header';
import HomeSpecials from './Components/HomeSpecials';
import Searching from './Components/Searching';
import {  BrowserRouter as Router , Route , Routes} from "react-router-dom";
import AuthenticationModal from './Components/auth/AuthenticationModal';
import ProductCategory from './Components/products/ProductCategory';
import "swiper/css/bundle";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path={'/'} element={
          <React.Fragment>
            <Header/>
            <Searching />
            <HomeSpecials />
            <ProductCategory />
          </React.Fragment>
          } 
        />
          <Route exact path="/" element={<AuthenticationModal />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
