import React from 'react';
import AddHeader from '../components/header';
import AddFooter from '../components/footer';
import AddCategory from '../components/category';
import AddFaq from '../components/faq';

function Faq() {
  console.log("FAQ PAge");
    return (
      <div className="App">
        <AddHeader />
        <AddCategory />
        <AddFaq />
        <AddFooter />
        
      </div>
    );
  }
  
  export default Faq;