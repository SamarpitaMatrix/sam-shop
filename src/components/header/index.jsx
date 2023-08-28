import React from 'react';
import { HeaderDiv } from './style';

import { Link } from "react-router-dom";

const AddHeader =() => {

    return(
        <HeaderDiv>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/> 
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                        
                                <Link to="/faq" className="text-dark">Faqs</Link>
                                {/* <a className="text-dark" path="/faq" exact component={Faq}>FAQs</a>
                                <span className="text-muted px-2">|</span>
                                <a className="text-dark" href="#!">Help</a>
                                <span className="text-muted px-2">|</span>
                                <a className="text-dark" href="#!">Support</a> */}
                                
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="#!">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="#!">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="#!">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="#!">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-dark pl-2" href="#!">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="#!" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products"/>
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <a href="#!" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                        <a href="#!" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </HeaderDiv>
        )
    }
    
    export default AddHeader