import React from "react";

export default class Plan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventTitle: "",
            startTime: "",
            endTime: "",
            startDate: "",
            endDate: "",
            eventType: "",
            address: "",
            locationType: "",
            plotDimension: "",           
            parkingDescription: "",
            requestHelper: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        console.log(this.state);
        e.preventDefault();
    }
    render(){
        return(
            // <form onSubmit={this.handleSubmit}>
                <div className="container py-5">
                    <form className="row g-3" onSubmit={this.handleSubmit}>
                        <div className="col-12 mb-4">
                            <label htmlFor="eventTitle" className="form-label">Event Title:</label>
                            <input type="text" name="eventTitle" id="eventTitle" value={this.state.eventTitle} onChange={this.handleInputChange} className="form-control"/>
                        </div>                        
                        <div className="col-12 mb-4">
                            <label htmlFor="startDate" className="form-label">Start Date:</label>
                            <input type="date" name="startDate" id="startDate" value={this.state.startDate} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="endDate" className="form-label">End Date:</label>
                            <input type="date" name="endDate" id="endDate" value={this.state.endDate} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="startTime" className="form-label">Start Time:</label>
                            <input type="time" name="startTime" id="startTime" value={this.state.startTime} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="endTime" className="form-label">End Time:</label>
                            <input type="time" name="endTime" id="endTime" value={this.state.endTime} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="eventType" className="form-label">Event Type:</label>
                            <select name="eventType" id="eventType" value={this.state.eventType} onChange={this.handleInputChange} className="form-select">
                                <option value="TBD">TBD</option>
                                <option value="...">...</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="locationType" className="form-label">Location Type:</label>
                            <select name="locationType" id="locationType" value={this.state.locationType} onChange={this.handleInputChange} className="form-select">
                                <option value="TBD">TBD</option>
                                <option value="...">...</option>
                            </select>
                        </div>
                        <div className="col-9 mb-4">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} className="form-control"/>
                        </div>   
                        <div className="col-3 mb-4">
                            <label htmlFor="plotDimension" className="form-label">Location Dimension:</label>
                            <input type="text" name="plotDimension" id="plotDimension" value={this.state.plotDimension} onChange={this.handleInputChange} className="form-control"/>
                        </div> 
                        <div className="col-12 mb-4 form-floating">
                            <label htmlFor="plotDimension" className="form-label">Describe Parking Situation:</label>
                            <textarea type="text" name="plotDimension" id="plotDimension" value={this.state.plotDimension} onChange={this.handleInputChange} className="form-control" style={{height: "160px"}}></textarea>
                        </div> 
                        <div className="col-12 mb-4">
                            <div className="form-check">
                                <label htmlFor="requestHelper" className="form-check-label">request helper</label>
                                <input type="checkbox" name="requestHelper" id="requestHelper" value={this.state.requestHelper} onChange={this.handleInputChange} className="form-check-input"/>
                            </div>
                        </div> 
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>  
                </div>

            // </form>
        )
    }

}