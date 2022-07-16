import React, { Component } from 'react';
import { Tab ,Tabs } from "react-bootstrap";
import instance from '../../api/api';

class VehicleInDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "live",  
            logs : []
        }
    }

    async componentDidMount() {
        console.log(this.props);
        try{
            await instance({
                url : "fleet-details?number_plate=TN10AV0001",
                // url : "fleet-details?number_plate=" + this.props.match.params.id,TN10AV0001
                method : "GET"
            })
            .then((res) => {
                this.setState({
                    entry : res.data.data.logs 
                })
                console.log(res.data.data.logs)
            })
        } 
        catch(error){
            console.log(error);
        }
    }

    render() { 
        const { key , logs} = this.state;
        return (
           <div className='container'>
       
    
                <br />
                <h3 className="custom-title">Vehicle Detail</h3>
    
                <Tabs
          id="controlled-tab-example"
          activeKey={key}
          transition={false}
          onSelect={(k) => this.setState({ key: k })}
          className="mb-3"
        >
          <Tab eventKey="live" title="Entry Details">
      
          {logs.length !==0 ? 
             logs.map((appointment , index) => (
              <div className="container-fluid appointments-boxes" key={index}>
                      <div className="row">
                      <div className="col-3 col-md-3">
                      <a >
                          <div className="appointment-time">ID: {appointment.in_unit}</div>
                          </a>
                        </div>
                        <div className="col-3 col-md-3">
                          <div className="appointment-time">{appointment.time}</div>
                        </div>
                        <div className="col-3 col-md-3">
                          <div className="appointment-name">Dr.{appointment.doctor.name}</div>
                        </div>
                       
                        <div className="col-3 col-md-3">
                          <div className="appointment-progress">
                          {appointment.consulted ? (
                              <small style={{"background" : "#C0F2D8",  'color': "#2BD47D"}}>Consulted</small>
                          ) : (
    
                              <small style={{"background" : "#f7d4d7",  'color': "#e05260"}}>Pending</small>
                              )}
                         </div>
                        </div>
                      </div>
                    </div> 
                ))
          : 
          (  
            <h5 className="custom-subtitle">No entries for Today</h5>
            
          )} 
          
                 
          </Tab>
    
           

          <Tab eventKey="all" title="Exit Details">
          {/* {allappointments.isempty === false ? (
             allappointments.appointments.map((appointment , index) => (
              <div className="container-fluid appointments-boxes" key={index}>
                      <div className="row">
                      <div className="col-3 col-md-3">
                      <a href={"/appointment-details/"+appointment.id}>
                          <div className="appointment-time">ID: {appointment.id}</div>
                          </a>
                        </div>
                        <div className="col-3 col-md-3">
                          <div className="appointment-time">{appointment.time}</div>
                        </div>
                        <div className="col-3 col-md-3">
                          <div className="appointment-name">Dr.{appointment.doctor.name}</div>
                        </div> 
                        <div className="col-3 col-md-3">
                          <div className="appointment-progress">
                          {appointment.consulted ? (
                              <small style={{"background" : "#C0F2D8",  'color': "#2BD47D"}}>Consulted</small>
                          ) : (
    
                              <small style={{"background" : "#f7d4d7",  'color': "#e05260"}}>Pending</small>
                              )}
                         </div>
                        </div>
                      </div>
                    </div> 
                ))
          ) : 
          (  
            <h5 className="custom-subtitle">No exits for today</h5>
            
          )} */}
          </Tab>
    
        </Tabs> 
         <br />
           </div>
        );
    }
}
 
export default VehicleInDetail;