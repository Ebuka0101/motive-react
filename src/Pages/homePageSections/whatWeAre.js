import React from "react"
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
import badgeone from "../../Images/5f89f58d2dfac88175937119cecca63e.png"
import badgetwo from "../../Images/d9aeb53d702512f3574e5f4d25f13a39.png"
import badgethree from "../../Images/6e7e7722f9f8dc8ca912680948193ddc.png"
import CustomRouteButton from "../../Components/CustomRouteButton";

export default function WhatWeAre(props){
    return(
        <> 
            <div>
                <div className="pt-5 text-start container">
                    <div className="row py-lg-3">
                            <h2 className="fw-light headerHighlight display-3">Planning a motivv?</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-1 justify-content-center align-items-center">
                    <div className="col-lg-9 text-start my-3">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                    </div>
                    <div className="col-lg-3 align-items-center">
                        <div className="row justify-content-center my-2">
                            <CustomRouteButton btnstyle={"btn--outline"} className="getStartedBtnStyle" animate={true}>Get Started</CustomRouteButton>    
                        </div>                
                    </div>
                </div>
                <hr className="mt-5"></hr>
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-4 text-center">
                        <img src={badgeone} alt="loyaty Badge" className="img-fluid badge-style"/>
                        <p className="fs-5 mt-3 text-muted">When you join up with us, your goals become our goals. We want to make sure our goal are accomplished</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={badgetwo} alt="loyaty Badge" className="img-fluid badge-style"/>
                        <p className="fs-5 mt-3 text-muted">Our Team us dedicated to help you achieve all your goals</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={badgethree} alt="loyaty Badge" className="img-fluid badge-style"/>
                        <p className="fs-5 mt-3 text-muted">We will help you to find the most crative methods that will achieve your goals in the requested time</p>
                    </div>
                </div> 
                <hr className="mt-5"></hr>
                <div className="row mt-5 text-center headerHighlight">
                    <h3 className="fw-light display-5 ">Our Motive</h3>
                </div>
                <div className="row mt-lg-3 justify-content-center mb-5">
                    <div className="col-lg-9 text-center">
                        <p className="fs-3 text-mmuted">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    </div>
                </div>               
            </div>
        </>

    )
}