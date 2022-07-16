import React, { Component } from "react";
import instance from "../../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        img : null,
        camera_number : "",
        response : ""
    };
  }

  detectEntryNumber = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(); 
    formData.append('img', this.state.img , this.state.img.name);
    formData.append('camera_number', "fp153");
    await instance({
        url : 'fleet-in-out/',
        method : 'POST',
        data : formData
    })
    .then((res) => {
      window.location.reload();
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
        this.setState({
            response : err.response.data.msg
        })
    })
  }


  detectExitNumber = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(); 
    formData.append('img', this.state.img , this.state.img.name);
    formData.append('camera_number', "fp123");
    await instance({
        url : 'fleet-in-out/',
        method : 'POST',
        data : formData
    })
    .then((res) => {
      window.location.reload();
      console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
  }

  render() {
    const {response} = this.state;
    return (
      <div className="container">
        <h3 className="custom-title">Panel</h3>
        <br />
        <h3 style={{"color":"red"}}>{response}</h3>
        <br/>
        <div className="row">
            <form onSubmit={this.detectEntryNumber} >
          <div className="col-md-6">
            <label>Entry Camera (fp153)</label>
            <br />
            <input type="file" className="form-control"
             onChange={(e) =>
                this.setState({
                    img: e.target.files[0],
                })
              } />
            <br />
            <button className="btn btn-primary" type="submit">Detect</button>
          </div>
          </form>
        </div>
        <br />
        <br />

        <div className="row">
            <form onSubmit={this.detectExitNumber} >
          <div className="col-md-6">
            <label>Exit Camera (fp123)</label>
            <br />
            <input type="file" className="form-control"
             onChange={(e) =>
                this.setState({
                    img: e.target.files[0],
                })
              }
               />
            <br />
            <button className="btn btn-primary" type="submit">Detect</button>        
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Dashboard;
