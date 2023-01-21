import React from 'react';
import './App.css';
import Header from './Components/Header';
import HomeSpecials from './Components/HomeSpecials';
import Searching from './Components/search/Searching';
import {  BrowserRouter as Router , Route , Routes} from "react-router-dom";
import AuthenticationModal from './Components/auth/AuthenticationModal';
import ProductCategory from './Components/products/ProductCategory';
import "swiper/css/bundle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductView from './Components/products/ProductView';
import SearchPage from './Components/search/SearchPage';

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
          <Route exact path="#" element={<AuthenticationModal />}></Route>
          <Route exact path="/:category/:id" element={<ProductView />}></Route>
          <Route exact path="/search/:searchValue?" element={<SearchPage />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
