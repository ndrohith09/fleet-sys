import React, { Component } from 'react';
import instance from '../../api/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2'; 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



class ActivityLog extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [], 
         date : ""
      }
   }
   changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }); 
    console.log(this.state);
  };
  
   postDate = async (e) => {
    e.preventDefault();
    try {
      await instance({
        url: "fleet-live/?date="+this.state.date, 
        method: "GET", 
      })
      .then((res)=> {
        console.log(res);
        this.setState({
          data: res.data.data
        })
      })
      .catch((err)=> {
        console.log(err);
      })
    }
    catch (err) {
      console.log(err);
    }
   }

    render() { 
      const { data } = this.state;
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true, 
          },
        },
      };

        return (
            <div className='container'>
            <h3 className="custom-title"> Activity Log ({data.length}) </h3>
            <br />
            <Line options={options} data = {
              {
                labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], 
                datasets: [
                  {
                    label: 'No of vehicles',
                    data: [12, 19, 3, 5, 2, 16, 10],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  },
                ],
              }
            } />
            <br />
            <form onSubmit={this.postDate} className='card'>
            <div className='row'>
            <div className='col-md-3'>
            <label>Select Date to show log</label>
            </div>
            <div className='col-md-4'>
            <input type='date' name="date" id="date" 
            onChange={this.changeHandler}
            required
            className='form-control' 
            />
            </div>
            <div className='col-md-3'>
            <button className='btn-primary' type='submit' >
            Show Log
            </button>
            </div> </div>
            </form>
            <br />
            <br />
            <table className="table table-hover responsive">
                <thead> 
                    <tr>
                        <th>Asset ID</th>
                        <th>Asset Name</th> 
                        <th>Number Plate</th>
                        <th>Driver Name</th> 
                        <th>Entry</th> 
                        <th>Time</th> 
                        <th>Gate Number</th> 
                    </tr>
                </thead>
                <tbody>
                  {data.length ? 
                  data.map((item, index) => (
                <tr key={index}>
                        <td>{item.asset_id}</td>
                        <td>{item.asset_name}</td>
                        <td>{item.number_plate}</td>
                        <td>
                          {item.driver_name}
                        </td> 
                        <td>
                            <div className="col-3 col-md-3 profile-details">
                    <div className="appointment-text"> 
                    {item.entry ? (
                      <i class="bx bxs-check-circle"></i>
                      ) : (
                      <i class="bx bxs-x-circle"></i>
                    )}                       
                    </div>
                  </div></td>
                        <td>{item.time}</td>
                        { item.entry ? 
                        <td>
                          {item.entry_gate}
                        </td>  : 
                        <td>
                          {item.exit_gate}
                        </td>
                    }
                      
                    </tr>
                  )) : (
                    <h5>no data</h5>
                  )}
                    
                    
                </tbody>
            </table>
            </div>
        );
    }
}
 
export default ActivityLog;