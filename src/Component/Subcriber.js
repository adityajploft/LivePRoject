import React, { useState } from "react";
import { Col, Table, Row } from "react-bootstrap";
import Icn1 from "../assets/images/icn-1.svg";
import Icn2 from "../assets/images/icn-2.svg";
import Icn3 from "../assets/images/icn-3.svg";
// import Icn4 from "../assets/images/icn-4.svg";
import Icn5 from "../assets/images/icn-5.svg";
import Ddownsl from "../assets/images/down-sl.svg";
import Up from "../assets/images/up.svg";
import Mapbl from "../assets/images/map-bl.png";
import Menuicn from "../assets/images/menu-icn.svg";
import Imgtble from "../assets/images/img-tble.png";
import Serch from "../assets/images/search.svg";

import Dropdn from "../assets/images/drop-down-line.svg";
import Prev from "../assets/images/prev.svg";
import Next from "../assets/images/next.svg";

function Subcriber() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };

  return (
    <div className="main-content">
      <button className="add-sub-btn">+ Add Subcriber</button>
      <div className="section-heading">
        <span>
          <h1>Subrcibers</h1>{" "}
        </span>
      </div>

      <div className="top-spenders city-lst">
        <div className="subscriber-table-header">
          <h2>Applications</h2>
          <span className="text-srch-table">
            <form>
              <input type="text" placeholder="Search..." />
              <img src={Serch} alt="img" />
              <select>
                <option disabled selected>
                  Filters
                </option>
              </select>
            </form>
          </span>
        </div>

        <Table striped bordered hover className="table-responsive subs-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Sub ID</th>
              <th>
                Name
                <p>
                  <input placeholder="Search" className="name-search" />
                </p>
              </th>
              <th>
                Adjective
                <p>
                  <input placeholder="Search" className="adj-search" />
                </p>
              </th>
              <th>
                Date Of Birth
                <p>
                  <input type="date" className="dob-search" />
                </p>
              </th>
              <th>
                Year Spending
                <p>
                  <span>
                    <input placeholder="Min" className="min-search" />
                  </span>{" "}
                  to{" "}
                  <span>
                    <input placeholder="Max" className="max-search" />
                  </span>
                </p>
              </th>
              <th></th>

              <th>
                Action
                <p>
                  <select className="select-search">
                    <option selected disabled>
                      Inactive
                    </option>
                  </select>
                </p>
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>2322</td>
              <td>
                <img className="me-2" src={Imgtble} alt="img" /> Leslie
                Alexander
              </td>
              <td>Employer</td>
              <td>01/12/2021</td>
              <td>$5,000</td>
              <td></td>
              <td>
                <span className="table-inactive">Inactive</span>
              </td>
              <td>
                <img src={Menuicn} alt="img" />
              </td>
              <td>
                <span className={isShown ? "" : "menuicon-rotate"}>
                  <img onClick={handleClick} src={Dropdn} alt="img" />
                </span>
              </td>
            </tr>
            <tr style={{ display: isShown ? "none" : "revert" }}>
              <td colspan="10">
                <table>
                  <thead>
                    <th>ID</th>
                    <th>Family Member Name</th>
                    <th>Reltation To Subscriber</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2322</td>
                      <td>Leslie Alexander</td>
                      <td>12132</td>
                      <td>Brother</td>
                      <td>12/12/12</td>
                    </tr>

                    <tr>
                      <td>2322</td>
                      <td>Leslie Alexander</td>
                      <td>12132</td>
                      <td>Brother</td>
                      <td>12/12/12</td>
                    </tr>

                    <tr>
                      <td>2322</td>
                      <td>Leslie Alexander</td>
                      <td>12132</td>
                      <td>Brother</td>
                      <td>12/12/12</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>2322</td>
              <td>
                <img className="me-2" src={Imgtble} alt="img" /> Leslie
                Alexander
              </td>
              <td>Employer</td>
              <td>01/12/2021</td>
              <td>$5,000</td>
              <td></td>
              <td>
                <span className="table-inactive">Inactive</span>
              </td>
              <td>
                <img src={Menuicn} alt="img" />
              </td>
              <td>
                <img onClick={handleClick} src={Dropdn} alt="img" />
              </td>
            </tr>{" "}
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>2322</td>
              <td>
                <img className="me-2" src={Imgtble} alt="img" /> Leslie
                Alexander
              </td>
              <td>Employer</td>
              <td>01/12/2021</td>
              <td>$5,000</td>
              <td></td>
              <td>
                <span className="table-inactive">Inactive</span>
              </td>
              <td>
                <img src={Menuicn} alt="img" />
              </td>
              <td>
                <img onClick={handleClick} src={Dropdn} alt="img" />
              </td>
            </tr>{" "}
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>2322</td>
              <td>
                <img className="me-2" src={Imgtble} alt="img" /> Leslie
                Alexander
              </td>
              <td>Employer</td>
              <td>01/12/2021</td>
              <td>$5,000</td>
              <td></td>
              <td>
                <span className="table-inactive">Inactive</span>
              </td>
              <td>
                <img src={Menuicn} alt="img" />
              </td>
              <td>
                <img onClick={handleClick} src={Dropdn} alt="img" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div class="table-wrapper">
        <div className="clearfix">
          <div className="hint-text">
            <b>Showing</b>
            <select>
              <option>5</option>
              <option>5</option>
            </select>
            <b>entries</b>
            <span>1 to 10 of 430 entries</span>
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">
                <img src={Prev} alt="img" />
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item ">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                ....
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                116
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <img src={Next} alt="img" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subcriber;
