import React, { Component } from 'react';
import instance from "../../api/api";

class CameraData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        camera : ""
      }
    }

    async componentDidMount() {
      try {
         await instance({
          url: "camera/",
          method: "GET"
        })
        .then((res)=> {
          this.setState({ camera: res.data.data });
          console.log(res.data);
        }) 
      }
      catch (err) {
        console.log(err);
     
      }
    }

    render() { 
      const { camera } = this.state;
        return (
            <div className='container'>
            <h3 className="custom-title"> Activity Log </h3>
            <br />
            <table className="table table-hover responsive">
                <thead> 
                    <tr>
                        <th>ID</th>  
                        <th>Number</th>
                        <th>Latitude</th> 
                        <th>Longitude</th>  
                        <th>Gate Number</th> 
                        <th>Entry</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                  {camera.length !== 0 ?
                  camera.map((camera , index) => (
                    <tr key={index}>
                        <td>{camera.id}</td>
                        <td>{camera.number}</td>
                        <td>{camera.latitude}</td>
                        <td>{camera.longitude}</td> 
                        <td>{camera.gate_number}</td> 
                        <td>
                            <div className="col-3 col-md-3 profile-details">
                    <div className="appointment-text"> 
                    {camera.entry ? (
                      <i class="bx bxs-check-circle"></i>
                    ) : (
                      <i class="bx bxs-x-circle"></i>
                    )}                       
                    </div>
                  </div></td> 
                        <td>
                            <div className="col-3 col-md-3 profile-details">
                    <div className="appointment-text"> 
                    {camera.available ? (
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
 
export default CameraData;