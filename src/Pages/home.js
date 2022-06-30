import React from "react";
import Promotions from "./homePageSections/promotions";
import Ranking from "./homePageSections/ranking";
import FeaturesController from "./homePageSections/featuredEvents"
import WhatWeAre from "./homePageSections/whatWeAre"
import "../StyleFile/globalStyles.css"
import "../StyleFile/eventType.css"

// change Home.css to home features and move need styles from EventType.css to global 

export default function Home(props){
    return(
        <div>
            <div className="bg-dark borderHighlight"  style={{maxHeight:  "555px"}}>
                <FeaturesController desktopPosterContainerStyle="featuredEventPoster" mobilePosterContainerStyle="featuredEventPoster" customBg="bgHeaderHeight" infoContainerStyle="featuredEventInfo"/>
            </div>
            <Ranking />
            <WhatWeAre />
            <Promotions />
        </div>

    );
}