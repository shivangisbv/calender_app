import React, { Component } from 'react';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import DatePicker from "react-datepicker";

 
import "react-datepicker/dist/react-datepicker.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate:  new Date()
    }
    this.checkDate = this.checkDate.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
}

handleDateChange =(date) => {
  this.setState(state =>({
    startDate: date})
    )
}

checkDate (start_time, startDate){
var starttime = start_time.split(" ");
var d = new Date(starttime[0]+','+starttime[1]+','+ starttime[2]);
const start=d.toDateString();
const salecteddate =new Date(startDate).toDateString();
if(start===salecteddate){
 return 1;
}
}
  render() {
    return (
      <div className="Appmodal"> 
        <MDBModal  isOpen={this.props.flag}  size="lg">
            <MDBModalHeader  className="Modalheader">
              <span className="Modaltitle">USER DETAILS MODAL</span>    
            </MDBModalHeader>
            <MDBModalBody className="Modalbody">              
            <div className="Firstrow ">
            <span className="inlinestyle"> User Name :</span> {this.props.date.real_name}
          </div> 
          <div className="Secondrow ">
            <span className="inlinestyle">Choose Calender </span>   
              <DatePicker selected={this.state.startDate} 
                    onChange={this.handleDateChange}
                    name="startDate"
                    dateFormat = "MM/dd/yyyy"
                    /> 
          </div>
            <h5 className="Modalpragraph">Information of {this.props.date.real_name}</h5>
                {(
                  typeof  this.props.date.activity_periods !== "undefined")
                    && this.props.date.activity_periods.map((link,i) =>      
                    (this.checkDate(link.start_time,this.state.startDate)) && 
                    <li className="list  " key={i}>{link.start_time}, {link.end_time}
                </li>   
                )}
            </MDBModalBody>
            <MDBModalFooter className="Footersection">
                <MDBBtn className="btn btn-light" onClick={this.props.togel} >Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
      </div> 
    );
  }
}
export default Modal;




