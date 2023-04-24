import React, { useEffect } from "react";
import { DropdownButton, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import Serch from "../assets/images/search.svg";
import Menu from "../assets/images/menu-icon.svg";
import Notification from "../assets/images/notification.svg";
import Profile from "../assets/images/profile.png";
import Dropdownn from "../assets/images/drop-down.svg";
import Logonew from "../assets/images/logo-1.svg";
import Noti1 from "../assets/images/noti-1.svg";
import Srch1 from "../assets/images/srch-1.svg";
import Menu1 from "../assets/images/menu-1.svg";
import { useDispatch, useSelector } from "react-redux";
import { SideBarFun } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.fetchdata);

  const CallActions = () => {
    dispatch(SideBarFun(!sidebar));
  };

  const Logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <div className="header">
        <div className="text-srch">
          <div className="menu-icn">
            {sidebar ? (
              <img src={Menu1} alt="img" onClick={CallActions} />
            ) : (
              <span onClick={CallActions}>
                {" "}
                <img src={Menu} alt="img" />
              </span>
            )}
          </div>
          <img src={Logonew} alt="img" />
        </div>
        <div className="noti-mst-uer text-srch">
          <form>
            <input type="text" placeholder="Search here..." />
            <img src={Srch1} alt="img" />
          </form>

          <div className="msg-icn">
            <img src={Noti1} alt="img" />
          </div>
          <div className="profile-drpdn">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                className="norml-btn-bt"
                id="dropdown-autoclose-true"
              >
                <div className="user-profile">
                  <span>John Doe</span>
                  <img src={Dropdownn} alt="img" />
                  <div className="img-usr">
                    <img src={Profile} alt="img" />
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
                {/* <span >Logout</span> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
