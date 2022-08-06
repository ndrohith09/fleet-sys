import React, { Component } from "react";
import img from "../../assets/images/useravatar.png";
import {NavDropdown} from "react-bootstrap"; 
class Nav extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      userdata : [],
    }
  }

  drawerToggle = () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    let homesection = document.querySelector(".home-section");

      sidebar.classList.toggle("active");
      homesection.classList.toggle("active");
      if(sidebar.classList.contains("active")){
      sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    }else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  };


  logoutAdmin() {
    try{
      localStorage.removeItem("_token");
      localStorage.removeItem("_user"); 
      window.location.reload();
      return window.location.href = "/";
    }catch(e){
      console.error(e);
    }
  }

  render() {
    const { userdata } = this.state;
    return (
      <>
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"
            onClick={this.drawerToggle}
            ></i>
              {/* <span class="custom-title">Dashboard</span> */}
          </div>     

          <div class="profile-details" style={{"alignItems" : "end"}}>                              
          <h3 className="appointment-time">
          <img src={img}
           alt="" /> &nbsp;Fleet Admin</h3>
 
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
