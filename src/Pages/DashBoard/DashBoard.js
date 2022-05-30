import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faArrowRightFromBracket,
  faUserShield,
  faUserCog,
  faPlusSquare,
  faTasks,
  faCogs,
  faCreditCard,
  faStar,
  faUser,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./DashBoard.css";
import { Link, Outlet } from "react-router-dom";
const DashBoard = ({ show, setShow }) => {
  const handleLogOut = () => {
    signOut(auth);
  };
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div>
      <div className="row ">
        <div className="col-md-2 col-sm-12 p-0">
          <div id="header">
            <ProSidebar collapsed={menuCollapse}>
              <SidebarHeader>
                <div className="logotext pt-3">
                  {/* small and big change using menucollapse state */}
                  <p className="text-center">
                    {menuCollapse ? "Menu" : "Made In China"}
                  </p>
                </div>
                <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
                  {menuCollapse ? (
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  ) : (
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                  )}
                </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem active={true}>
                    <FontAwesomeIcon className="m-1" icon={faUserShield} />{" "}
                    Admin
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/dashboard/users"
                    >
                      <FontAwesomeIcon icon={faUserCog} /> All Users
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="text-decoration-none text-dark" to="/">
                      <FontAwesomeIcon icon={faPlusSquare} /> Add Product
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="text-decoration-none text-dark" to="/">
                      <FontAwesomeIcon icon={faTasks} /> Manage Products
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="text-decoration-none text-dark" to="/">
                      <FontAwesomeIcon icon={faCogs} /> Manage All Order's
                    </Link>
                  </MenuItem>
                </Menu>
              </SidebarContent>
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem active={true}>
                    <Link className="text-dark" to="/dashboard">
                      <FontAwesomeIcon className="m-1" icon={faUser} /> User
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/dashboard/myorders"
                    >
                      <FontAwesomeIcon icon={faCartPlus} /> My Order
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/dashboard/review"
                    >
                      <FontAwesomeIcon icon={faStar} /> Review{" "}
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="text-decoration-none text-dark" to="/">
                      <FontAwesomeIcon icon={faCreditCard} /> Payment{" "}
                    </Link>
                  </MenuItem>
                </Menu>
              </SidebarContent>
              <SidebarFooter>
                <Menu iconShape="square">
                  <MenuItem>
                    <p
                      onClick={handleLogOut}
                      className="dashboard-menu-item text-decoration-none"
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                      /> Logout{" "}
                    </p>
                  </MenuItem>
                </Menu>
              </SidebarFooter>
            </ProSidebar>
          </div>
        </div>
      </div>
      <div className="col-md-11 col-sm-12 p-0 ms-auto">
        <h2 className="text-center my-5">Dashboard</h2>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
