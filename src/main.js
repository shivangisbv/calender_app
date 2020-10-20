import React from 'react';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import axios from 'axios';
import './App.css'
import Modal from './modal_component';

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members:[],
            modal:false,
            selectedinfo:{},
            modalInputName:"",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        axios.get(`http://my-json-server.typicode.com/shivangisbv/mockjson/db/`,{})
        .then((res)=>{
            const members = res.data.members ;
            this.setState({
                members:members,    
            });
            })
        .catch((error)=>{
            alert("There is an error in API call.");
        });
    }  
 
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        });
    } 
    handleSubmit(e) {
        this.setState({
            modal:this.state.modalInputName });
            this.toggle();
    } 
    
    toggle = (e,index) => {
        this.setState({
          modal: !this.state.modal,
          selectedinfo: this.state.members[index]
        });
      }  
   setmodel =()=>{
    this.setState({
        modal: !this.state.modal,
       
      });  
   }
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col align-self-center ">
                        <h1 className="title ">Display All User Names</h1> 
                            {this.state.members.map((member,index) => (
                                <li  key={index}  onClick={(e)=>this.toggle(e,index)} className=" text-default ">
                                    { member.real_name} 
                                
                                </li>  
                        
                            ))}    
                            {this.state.selectedinfo &&    <Modal  date = {this.state.selectedinfo} togel={this.setmodel} 
                            flag={this.state.modal}/>}

                    </div>
                </div>
            </div>
        );
    }
}
export default MainApp ;