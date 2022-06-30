import React from "react";
import "./button.css";

const BTNSTYLE = ["btn--outline", "btn--solid"];



//modify :root tag in button.css to change value for now, find smoother way
export default function CustomRouteButton({children,onClick, btnstyle, style, animate, className}){

    const validButtonStyle = BTNSTYLE.includes(btnstyle) ? btnstyle : BTNSTYLE[0];
    const enableAnimation = (animate === true) ? "btn--animate": "";
    // const extraClasses = className.split(",")
    
    return(
        <div className="routeBtnContainer">
            <button className={`btn ${validButtonStyle} ${enableAnimation} ${className}`} onClick={onClick} style={{...style}}>
                {children}
            </button>            
        </div>
    );
}