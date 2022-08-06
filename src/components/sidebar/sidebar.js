import React, { Component } from "react";
import Logo from '../../assets/images/logo.png';
import { IoAnalyticsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";

class Sidebar extends Component {
  active() {
    const currentLocation = window.location.href;
    const menuItem = document.querySelectorAll("a");
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
      }
    }
  }

  async componentDidMount() {
    try {
      this.active();
    } catch (error) {
      console.log(error);
    }
  }

  logoutAdmin() {
    try{
      localStorage.removeItem("_user_auth_token"); 
      // window.location.href = "/";
      return window.location.reload();
      // return window.location.href = "/";
    }catch(e){
      console.error(e);
    }
  }


  render() {
    return (
      <>
        <div class="sidebar">
          <div class="logo-details">
          <img class="logo_name" 
          src="https://firebasestorage.googleapis.com/v0/b/react-firechat-ae4bf.appspot.com/o/fleet%20fox.png?alt=media&token=d95c7a64-a29c-4c57-98b5-9a6bd5a7badd"
          style={{"width": "95%"}} />
          {/* <i class='bx bxl-sass' ></i>
            <span class="logo_name">SRMC</span> */}
          </div>
          <ul class="nav-links">
            <li>
              <a
                href="/"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Dashboard"
              >
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="/log"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Analytics"
              >
                <IoAnalyticsSharp />
                <span class="links_name">Activity Log</span>
              </a>
            </li>

            <li>
              <a
                href="/vehicle"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Vehicle"
              ><i class='bx bx-user' ></i>
                <span class="links_name">Vehicle</span>
              </a>
            </li> 

            <li>
              <a
                href="/add-vehicle"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Add Vehicle"
              >
                <IoAnalyticsSharp />
                <span class="links_name">Add Vehicle</span>
              </a>
            </li>

            <li>
              <a
                href="/camera"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Camera"
              ><i class='bx bx-user' ></i>
                <span class="links_name">Camera</span>
              </a>
            </li> 

            <li>
              <a
                href="/add-camera"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Add Camera"
              ><i class='bx bx-user' ></i>
                <span class="links_name">Add Camera</span>
              </a>
            </li> 
 
 
            {/* <li>
              <a
                href="/logout"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Logout" 
                onClick={this.logoutAdmin}
              ><HiOutlineLogout />
                <span class="links_name">Logout</span>
              </a>
            </li>  */}

          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
