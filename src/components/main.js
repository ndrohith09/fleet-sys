import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Nav from './nav/nav';
import URLPaths from "./routes";
import LoadingScreen from './loader/loadingscreen';
class Main extends Component {


  constructor(props) {
    super(props); 
    this.state = {
      loading : true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
    render() { 
    const  {loading} = this.state;
    return (
            <BrowserRouter>
            <div>
              <section class="home-section">
                <Nav />
                {/* <Dashboard /> */}
    
                  <div className="home-content">
                    { loading === false ?                
                    <URLPaths />
                    : <LoadingScreen />  } 
                  </div>
    
              </section>
            </div>
          </BrowserRouter>
          );
    }
}
 
export default Main;