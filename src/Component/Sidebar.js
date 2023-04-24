import React, { useState } from "react";
 
import { Link, NavLink, useLocation } from "react-router-dom";
import {RiArrowDropDownLine} from "react-icons/ri"
import Proicon from "../assets/images/pro-icon.png";
import Side1 from "../assets/images/side-1.svg";
import Side2 from "../assets/images/side-2.svg";
import Side3 from "../assets/images/side-3.svg";
import Side4 from "../assets/images/side-4.svg";
import Side5 from "../assets/images/side-5.svg";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [dropdown,setShowDrop] = useState(false)
  const { sidebar } = useSelector((state) => state.fetchdata);
  return (
    <div
      className={`${
        sidebar ? `sidebar-section ` : `sidebar-section tlge-sidebar`
      }`}
      style={{ height: "85vh", overflow: "scroll initial" }}
    >
      <div className="profile-section">
        <div className="pr-icn">
          <img src={Proicon} alt="img" />
        </div>
        <h3>John William</h3>
        <Link>User Account</Link>
      </div>
      <div className="meni-list">
        <ul>
          <li
            className={
              location.pathname == "/" ? "active meni-tem" : "meni-tem"
            }
          >
            <Link to="/">
              <i>
                {" "}
                <img className="main-imgg" src={Side1} alt="img" />
              </i>{" "}
              <span>Process Booking</span>
            </Link>
          </li>
          <li
            className={
              location.pathname == "/medical-center"
                ? "active meni-tem"
                : "meni-tem"
            }
          >
            <Link to="/medical-center">
              <i>
                {" "}
                <img src={Side2} alt="img" />
              </i>{" "}
              <span>Medical Center</span>
            </Link>
          </li>
          <li
            className={
              location.pathname == "/doctor" ? "active meni-tem" : "meni-tem"
            }
          >
            <Link to="/doctor">
              <i>
                {" "}
                <img src={Side3} alt="img" />
              </i>{" "}
              <span>Doctor</span>
            </Link>
          </li>
          <li
            className={
              location.pathname == "/institution"
                ? " active meni-tem"
                : "meni-tem"
            }
          >
            <Link to="/institution">
              <i>
                {" "}
                <img src={Side4} alt="img" />
              </i>{" "}
              <span>Institution</span>
            </Link>
          </li>
          <li
            className={
              location.pathname == "/expense-claims"
                ? "active meni-tem"
                : "meni-tem"
            }
          >
            <Link to="/expense-claims">
              <i>
                {" "}
                <img src={Side4} alt="img" />
              </i>{" "}
              <span>Expense Claims</span>
            </Link>
          </li>


          <li
            className={
              location.pathname == "/medical-claims" ||
              location.pathname == "/medical-claims-detail" ||
              location.pathname == "/medical-generic-service"
                ? "active meni-tem"
                : "meni-tem"
            }
            onClick={()=>setShowDrop(!dropdown)}
          >
            <Link to="#">
            <i>
              {" "}
              <img src={Side4} alt="img" />
            </i>{" "}
            <span>Medical Claims <b className={!dropdown ? "icn-dp" : "icn-dp rotate-icon"}><RiArrowDropDownLine/></b></span>
            </Link>
            
            <ul className={dropdown ? "drp-dwn" :"drp-dwn-default"}>
              <li
                // className={
                //   location.pathname == "/medical-claims"
                //     ? "active meni-tem"
                //     : "meni-tem"
                // }
              >
                <Link to="/medical-claims">
                  {/* <i>
                    
                  
                  </i>  */}
                  <span>Medical Claims</span>
                </Link>
              </li>

              <li
                // className={
                //   location.pathname == "/medical-claims-detail"
                //     ? "active meni-tem"
                //     : "meni-tem"
                // }
              >
                <Link to="/medical-claims-detail">
                  {/* <i>
                     
                  </i>  */}
                  <span>Medical Expense Claims Detailed View</span>
                </Link>
              </li>
              <li
                // className={
                //   location.pathname == "/medical-generic-service"
                //     ? "active meni-tem"
                //     : "meni-tem"
                // }
              >
                <Link to="/medical-generic-service">
                  {/* <i>
                   
                    
                  </i>  */}
                  <span>Medical Generic Service</span>
                </Link>
              </li>
            </ul>
          </li>

          <li
            className={
              location.pathname == "/admintration"
                ? "active meni-tem"
                : "meni-tem"
            }
          >
            <Link to="/admintration">
              <i>
                {" "}
                <img src={Side5} alt="img" />
              </i>{" "}
              <span> Admintration</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
