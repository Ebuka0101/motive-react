import React from "react";
import "../StyleFile/contactUs.css"
import "../StyleFile/globalStyles.css"
import CustomRouteButton from "../Components/CustomRouteButton";

export default function ContactUs(props){
    return(
        <>
            <div className="border border-1 bg-light" style={{display: "flex",justifyContent: "center"}}>
                <div className="text-center container row py-lg-5 py-3">
                    <h2 className="fw-light headerHighlight display-3">Contact Us</h2>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row justify-content-center align-items-center my-5">
                        <div className="col-lg-3 mx-5">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title my-5">Call Icon</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <div className="row justify-content-center my-5">
                                        <CustomRouteButton btnstyle={"btn--outline"} className="btnStyles" animate={true}>Call Us</CustomRouteButton>    
                                    </div>                            
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mx-5">
                        <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title my-5">Call Icon</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <div className="row justify-content-center my-5">
                                        <CustomRouteButton btnstyle={"btn--outline"} className="btnStyles" animate={true}>Start Chat</CustomRouteButton>    
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5 headerHighlight"></hr>
                    <div className="row justify-content-evenly align-items-center my-5">
                        <div className="col-12 col-lg mx-5">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                    <th scope="Days">Days</th>
                                    <th scope="Hours">Hours</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider text-center">
                                    <tr>
                                    <td>Monday</td>
                                    <td>9 am to 4pm</td>
                                    </tr>
                                    <tr>
                                    <td>Tuesday</td>
                                    <td>9 am to 4pm</td>
                                    </tr>
                                    <tr>
                                    <td>Wednesday</td>
                                    <td>9 am to 4pm</td>
                                    </tr>
                                    <tr>
                                    <td>Thursday</td>
                                    <td>9 am to 4pm</td>
                                    </tr>
                                    <tr>
                                    <td>Friday</td>
                                    <td>9 am to 4pm</td>
                                    </tr>
                                    <tr>
                                    <td>Satuday</td>
                                    <td>9 am to 3pm</td>
                                    </tr>
                                    <tr>
                                    <td>Sunday</td>
                                    <td>Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-10 col-lg">
                            <h3>Address</h3>
                            <p>Lorem ipsum dolor sit amet, f7g y8b, TA,Country </p>
                        </div>
                    </div>                
                </div>    
            </div>
            

        </>
    );
}