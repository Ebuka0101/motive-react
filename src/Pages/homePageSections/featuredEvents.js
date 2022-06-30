import React from "react";
import "../../StyleFile/globalStyles.css"
import "../../StyleFile/home.css"
import CustomRouteButton from "../../Components/CustomRouteButton";

function FeaturesMobile(props){
    return(
        <div className={`backGround mobile ${props.bgCustomContainer}`}>
            <div className={`mainEvent mobile card motivvCard ${props.mainEventContainerStyles}`}>
                <h1>Event Poster</h1>
            </div>
            {/* <div className="quickInfo card motivvCard mobile ">
                <h3>Quick Info</h3>
            </div>  */}
            <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true}>More Info</CustomRouteButton>  
        </div>    
    );
}

function FeaturesDesktop(props){
    return(
        <div className={`backGround desktop ${props.bgCustomContainer}`}>
            <div className={`mainEvent card motivvCard ${props.mainEventContainerStyles}`}>
                <h1>Event Poster</h1>
            </div>
            <div className="quickInfoContainer">
                <div className={`quickInfo card motivvCard ${props.quickInfoContainerStyles}`}>
                    <h3>Quick Info</h3>
                </div>
                <CustomRouteButton btnstyle={"btn--outline"} className="homeMoreInfoBtnStyle" animate={true}>More Info</CustomRouteButton>                   
            </div>
        </div>

    );
}

class FeaturesController extends React.Component {
    constructor(props){
        super(props);
        this.handleWindowWidth = this.handleWindowWidth.bind(this);
        this.state = {
            width: window.innerWidth,
        };
    }

    handleWindowWidth(){
        this.setState({width: window.innerWidth});
    }
    componentDidMount(){
        window.addEventListener('resize',this.handleWindowWidth);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.handleWindowWidth);
    }

    render(){
        const width= this.state.width;
        const isMobile = width <= 875; 
        let display;
        if(isMobile){
            display = <FeaturesMobile mainEventContainerStyles={this.props.mobilePosterContainerStyle} bgCustomContainer={this.props.customBg}/>
        }else{
            display = <FeaturesDesktop mainEventContainerStyles={this.props.desktopPosterContainerStyle} quickInfoContainerStyles={this.props.infoContainerStyle} bgCustomContainer={this.props.customBg}/>
        }
        return (
            <>
                {display}
            </>
        )
    }
}

export default FeaturesController;