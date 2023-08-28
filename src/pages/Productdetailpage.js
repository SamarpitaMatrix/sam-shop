import React from 'react';
import AddHeader from '../components/header';
import AddFooter from '../components/footer';
import AddCategory from '../components/category';
import AddProductDetail from '../components/productdetail';

function Productdetail() {
    return (
      <div className="App">
        <AddHeader />
        <AddProductDetail />
        <AddFooter />
        
      </div>
    );
  }
  
  export default Productdetail;