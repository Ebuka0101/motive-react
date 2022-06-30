import React from "react";
import "../StyleFile/landing.css"
import "../StyleFile/globalStyles.css"
import CustomRouteButton from "../Components/CustomRouteButton";

export default function LandingPage(props){
    return(
        <div className="intro">
           {/* bubbles animation will be added to background once layout is complete and inner div will have a larger z-index with shadowed border */}
            <div className="welcomeBox">
                <h1>Welcome to Motivv</h1>
                <h3>We take pride in helping you plan and attend events quickly, effectively, and safely</h3>
                <CustomRouteButton btnstyle={"btn--solid"} className="customBtnStyle" animate={true}>Click to begin</CustomRouteButton>                
            </div>
        </div>
    )
}