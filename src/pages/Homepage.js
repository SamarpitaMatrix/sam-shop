import React from 'react';
import AddHeader from '../components/header';
import AddFooter from '../components/footer';
import AddCategory from '../components/category';
import AddHomeproduct from '../components/homeproduct';

function Home() {
    return (
      <div className="App">
        <AddHeader />
        <AddCategory />
        <AddHomeproduct />
        <AddFooter />
        
      </div>
    );
  }
  
  export default Home;