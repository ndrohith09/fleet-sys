import React, { Component } from "react";
import instance from "../../api/api";

class Camera extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cam_number: "",
      latitude: "",
      longitude: "",
      gate_number: "",
      entry: false
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }); 
    console.log(this.state);
  };

  enableOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  postCamera = async (e) => {
    e.preventDefault();

    var data = {
      number: this.state.cam_number,
      latitude: this.state.latitude,
      longitude: this.state.longitude, 
      gate_number : this.state.gate_number,
      entry : this.state.entry
    }

    console.log("postCamera");

    try {
      await instance({
        url: "camera/",
        method: "POST",
        data: data
      })
      .then((res)=> {
        console.log(res);
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
        <h3 className="custom-title"> Add Camera </h3>
        <br />
        <form className="form-horizontal" onSubmit={this.postCamera}>
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                placeholder="Camera Number"
                name="cam_number"
                id="cam_number"
                onChange={this.changeHandler}
                required
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Latitude"
                name="latitude" 
                id="latitude"
                    onChange={this.changeHandler}
                    required
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Longitude"
                name="longitude"
                id = "longitude"
                    onChange={this.changeHandler}
                    required
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Gate Number"
                name="gate_number" 
                    onChange={this.changeHandler}
                    id="gate_number"
                    required
              />
              <br />
              <label >Entry camera</label>
              &nbsp;&nbsp;
              <input
                type="checkbox"
                name="entry" 
                id="entry"
                onChange={this.enableOnChange}
              />
            </div>
          </div>
          <br />
          <button  type="submit" className="btn btn-primary">Add Camera</button>
        </form>
      </div>
    );
  }
}

export default Camera;
