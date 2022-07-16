import React, { Component } from 'react';
import instance from "../../api/api";

class VehicleData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        vehicle : ""
      }
    }

    async componentDidMount() {
      try {
         await instance({
          url: "fleet/",
          method: "GET"
        })
        .then((res)=> {
          this.setState({ vehicle: res.data.data });
          console.log(res.data);
        }) 
      }
      catch (err) {
        console.log(err);
     
      }
    }

    render() { 
      const { vehicle } = this.state;
        return (
            <div className='container'>
            <h3 className="custom-title"> Vehicle Data </h3>
            <br />
            <table className="table table-hover responsive">
                <thead> 
                    <tr>
                        <th>ID</th>  
                        <th>Asset ID</th>
                        <th>Asset Name</th> 
                        <th>Driver Name</th>  
                        <th>Number Plate</th> 
                    </tr>
                </thead>
                <tbody>
                  {vehicle.length !== 0 ?
                  vehicle.map((camera , index) => (
                    <tr key={index}>
                        <td>{camera.id}</td>
                        <td>{camera.asset_id}</td>
                        <td>{camera.asset_name}</td>
                        <td>{camera.driver_name}</td> 
                        <td><a    
                        style={{ 'cursor' : 'pointer'}}                     
                         onClick={() =>
                            (window.location.href =
                              "vehicle-indetail/" + camera.number_plate)
                          }
                           >
                            {camera.number_plate}</a></td> 
                        <td>
                            <div className="col-3 col-md-3 profile-details">
                    <div className="appointment-text"> 
                    {camera.access ? (
                      <i class="bx bxs-check-circle"></i>
                    ) : (
                      <i class="bx bxs-x-circle"></i>
                    )}                       
                    </div>
                  </div></td>  
                    </tr>
                  )) : (
                    <>
                    No cam data
                    </>
                  )}
                    
                    
                </tbody>
            </table>
            </div>
        );
    }
}
 
export default VehicleData;