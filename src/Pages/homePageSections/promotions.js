import React from "react";
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
import CustomRouteButton from "../../Components/CustomRouteButton";

export default function Promotions(props){
    return(
        <div className="bg-light py-3">
            <div className="container bg-light">
                <div className="text-center headerHighlight display-3 pt-2 pt-lg-3">
                    <h2>Promotions</h2>
                </div>

                <div className="row my-5 g-0 align-items-center justify-content-center ">
                    <div className="col-11 col-lg-4 col-xl-3 mx-3">
                        <div className="card border-1">
                            <div className="card-body py-4 text-center">
                                <h4 className="card-title">Promotion Title</h4>
                                <div className="customListWrapper text-start mx-5 my-4">
                                    <ul className="card-text lead text-muted d-none d-lg-block">
                                        {/* replace bullets with check marks */}
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                    </ul> 
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">$12.99</p>
                                <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">Learn More</CustomRouteButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 bg-danger">
                        <div className="card border-2 borderHighlight">
                            <div className="card-body py-5 text-center">
                                <h4 className="card-title fs-3">Promotion Title</h4>
                                <div className="my-4 d-none d-lg-block">
                                    <div className="customListWrapper text-start">
                                        <ul className="card-text lead text-muted">
                                            {/* replace bullets with check marks */}
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                        </ul> 
                                    </div>
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">$12.99</p>
                                <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">Learn More</CustomRouteButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-lg-4 col-xl-3 mx-3">
                        <div className="card border-1">
                            <div className="card-body py-4 text-center">
                                <h4 className="card-title fs-3">Promotion Title</h4>
                                <div className="customListWrapper text-start mx-5 my-4">
                                    <ul className="card-text lead text-muted d-none d-lg-block">
                                        {/* replace bullets with check marks */}
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                        <li>Lorem ipsum</li>
                                    </ul> 
                                </div>
                                <p className="display-5 my-4 headerHighlight fw-bold">$12.99</p>
                                <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">Learn More</CustomRouteButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>

    )
}

