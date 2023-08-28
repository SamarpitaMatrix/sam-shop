import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HomeproductDiv } from './style';
import axios from 'axios';

const AddHomeproduct =() => {
    const [data, setData] = React.useState([]);
    const [cart, setCart] = React.useState({});
    const [itemCount, setItemCount] = React.useState(1);

    const addToCart = (event) => {
    }
    /*
    let consumer_key='ck_05103e9fc9c96c9d2855862f2f07b27e21d07126';
    let consumer_secret='cs_126d6787aa440ee462e1419a81c4a9dffc16a052';
    let url='https://yourcloudnetwork.net/projects/training/wp-json/wc/v3/products?consumer_key='+consumer_key+'&consumer_secret='+consumer_secret;

axios.get(url)
                .then(function (d) {
                    setProducts(d.data)
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                   
                });



*/
    useEffect(() => {
        let consumer_key='ck_05103e9fc9c96c9d2855862f2f07b27e21d07126';
    let consumer_secret='cs_126d6787aa440ee462e1419a81c4a9dffc16a052';
    let url='https://yourcloudnetwork.net/projects/training/wp-json/wc/v3/products?consumer_key='+consumer_key+'&consumer_secret='+consumer_secret;
        axios({
            method: 'get',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: url
          }).then(function (response) {
            setData(response.data)
            console.log(response.data);
          });
      })

return(
    <HomeproductDiv>
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
        {data.map((data, idx) => (
            <div key={data.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={data.images[0].src} alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{data.name}</h6>
                        <div className="d-flex justify-content-center">
                            <div
      dangerouslySetInnerHTML={{__html: data.price_html}}
    />
                        </div>

                        <div className="d-flex justify-content-center">
                            <div
      dangerouslySetInnerHTML={{__html: data.short_description}}
    />
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        
                        <Link path="productdetail/:id" to={"/productdetail/"+data.id} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                        
                      
                        &nbsp;<button
                            onClick={() => {
                                setItemCount(Math.max(itemCount - 1, 0));
                            }}
                        >
                            {" "}
                        -
                        </button>
                        {itemCount}
                        <button
                            onClick={() => {
                                setItemCount(itemCount + 1);
                            }}
                        >
                            {" "}
                            +
                        </button>
                        <a href="javascript:void(0);" onClick={addToCart(data.id)} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>

                    <div>
                
                    
                    
              
            </div>
                </div>
            </div>
            ))}
            
            
        </div>
    </div>
        
    </HomeproductDiv>
    )
}

export default AddHomeproduct