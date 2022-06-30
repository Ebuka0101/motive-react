import React from "react";
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
// import CustomRouteButton from "../../Components/CustomRouteButton";

export default function Ranking(){
    return(
        <div className="my-3 border-bottom border-1">
            <div className="container mb-5">
                <div className="text-center headerHighlight pt-2 pt-lg-3">
                    <h2>Rankings (Top 10 across all categories)</h2>
                </div>

                <div className="row my-5 g-0 align-items-end justify-content-center">
                    <div className="col-11 col-lg-4 col-xl-3 d-none d-lg-block">
                        <div className="card border-1">
                            <div className="card-body py-4 text-center">
                                <h4 className="card-title fs-3">Second place poster</h4>
                                <p className="display-5 my-4 headerHighlight fw-bold">Username</p>
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 ">
                        <div className="card border-2 borderHighlight" >
                            <div className="card-body py-5 text-center align-items-center">
                                <h4 className="card-title fs-2">First Place Poster</h4>
                                <p className="display-4 my-4 headerHighlight fw-bold">Username</p>
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-lg-4 col-xl-3 d-lg-none d-block">
                        <div className="card border-1">
                            <div className="card-body py-4 text-center">
                                <h4 className="card-title fs-3">Second place poster</h4>
                                <p className="display-5 my-4 headerHighlight fw-bold">Username</p>
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 col-xl-3">
                        <div className="card border-1">
                            <div className="card-body py-3 text-center">
                                <h4 className="card-title fs-4">Third Place Poster</h4>
                                <p className="display-6 my-4 headerHighlight fw-bold">Username</p>
                                {/* <div className="row justify-content-center">
                                    <CustomRouteButton btnstyle={"btn--outline"} className="viewInfoBtn">View Info</CustomRouteButton>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-end justify-content-center mb-3">
                    <div className="card mx-lg-5" style={{width: "clamp(20%,550px, 80%)"}}>
                        {/* add tool tip to button, add images buttons */}
                        <ol className="list-group list-group-numbered list-group-flush cnt">
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>                   
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start fs-5">
                                <div className="ms-2 me-auto">
                                    <div>Username</div>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#d500f9" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </li>
                        </ol>
                    </div>            
                </div>

            </div>            
        </div>
    
    )
}

