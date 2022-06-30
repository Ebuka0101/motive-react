import React from "react";
import "../StyleFile/eventType.css";
import "../StyleFile/globalStyles.css";
import FeaturesController from "./homePageSections/featuredEvents";

export default function EventType(){
    return(
        <>
            <div className="text-start container">
                <div className="row py-lg-3">
                        <h2 className="fw-light headerHighlight display-3">Some Event Type</h2>
                </div>
            </div>
            <div class="bg-dark borderHighlight"  style={{maxHeight:  "555px;"}}>
                <div className="text-start container">
                    <div className="row py-lg-3 ms-3">
                            <h3 className="fw-light headerHighlight display-6">Featured in Some Event Type</h3>
                    </div>
                </div>
                <FeaturesController desktopPosterContainerStyle="featuredEventPoster" mobilePosterContainerStyle="featuredEventPoster" customBg="bgHeaderHeight" infoContainerStyle="featuredEventInfo"/>
            </div>
            <div className="container mt-5">
                <div className="eventsList">
                    {/* turn into component */}
                    <div className="listPosterContainer">
                        <svg class="bd-placeholder-img listPosterImage" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">poster</text>
                        </svg>
                    </div>
                    <div className="listPosterContainer">
                        <svg class="bd-placeholder-img listPosterImage" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">poster</text>
                        </svg>
                    </div>
                    <div className="listPosterContainer">
                        <svg class="bd-placeholder-img listPosterImage" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                    <div className="listPosterContainer">
                        <svg class="bd-placeholder-img listPosterImage" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                    <div className="listPosterContainer">
                        <svg class="bd-placeholder-img listPosterImage" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                    <div className="listPosterContainer">
                        <svg class="bd-placeholder-img listPosterImage" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>        
        </>



    )
}