import React, { Component } from "react";
import instance from "../../api/api";

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_id: "",
      asset_name: "",
      number_plate: "",
      driver_name: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  postVehicle = async (e) => {
    e.preventDefault();
    var data = {
      asset_id: this.state.asset_id,
      asset_name: this.state.asset_name,
      number_plate: this.state.number_plate, 
      driver_name : this.state.driver_name, 
    }
 

    try {
      await instance({
        url: "fleet/",
        method: "POST",
        data: data
      })
      .then((res)=> {
        console.log(res);
        window.location.reload();
      })
      .catch((err)=> {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="custom-title"> Add Vehicle</h3>
        <br />
        <form className="form-horizontal" onSubmit={this.postVehicle}>
          
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                id="asset_id"
                name="asset_id"
                type="text"
                placeholder="Asset ID"
                onChange={this.changeHandler}
                required
              />
              <br />
              <input
                className="form-control"
                id="asset_name"
                name="asset_name"
                type="text"
                placeholder="Asset Name"
                onChange={this.changeHandler}
                required
              />
              <br />
              <input
                className="form-control"
                id="number_plate"
                name="number_plate"
                type="text"
                placeholder="Number Plate"
                onChange={this.changeHandler}
                required
              />
              <br />
              <input
                className="form-control"
                id="driver_name"
                name="driver_name"
                type="text"
                placeholder="Driver Name"
                onChange={this.changeHandler}
                required
              />
              <br />
            </div>
          </div>
        <button type="submit" className="btn btn-primary">Add Vehicle</button>
        </form>
        <br />
      </div>
    );
  }
}

export default Vehicle;
