
import { BrowserRouter } from "react-router-dom";
import URLPaths from './components/routes'; 
import "./assets/css/index.css";
import React, { Component } from 'react';
import Nav from './components/nav/nav';
import LoadingScreen from './components/loader/loadingscreen';
import Appbar from "./components/sidebar/sidebar";
import Main from "./components/main";
class App extends Component {
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
    }, 2000);
  }

  render() { 
    const { loading } = this.state;
    return (
      <>
      <Appbar />
        <Main /> 
        </>
    //   <BrowserRouter>
    //   <div>
    //     <section class="home-section">
    //       <Nav />
    //       {/* <Dashboard /> */}

    //         <div className="home-content">
    //           { loading === false ?                
    //           <URLPaths />
    //           : <LoadingScreen />  } 
    //         </div>

    //     </section>
    //   </div>
    // </BrowserRouter>
    );
  }
}
 
export default App;

 