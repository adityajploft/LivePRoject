import React, { useState } from "react";
import { Row, Col, Table, Form } from "react-bootstrap";
import Icn1 from "../assets/images/icn-1.svg";
import Icn2 from "../assets/images/icn-2.svg";
import Icn3 from "../assets/images/icn-3.svg";
// import Icn4 from "../assets/images/icn-4.svg";
import Icn5 from "../assets/images/icn-5.svg";
import Polygon from "../assets/images/polygon.svg";
import Ddownsl from "../assets/images/down-sl.svg";
import Up from "../assets/images/up.svg";
import Doc from "../assets/images/doc.svg";
import Wallet from "../assets/images/wallet.svg";
import Dollar from "../assets/images/dollar.svg";
import RedWallet from "../assets/images/red-doc.svg";
import Menuicn from "../assets/images/menu-icn.svg";
import Imgtble from "../assets/images/img-tble.png";
import Serch from "../assets/images/search.svg";

import Dropdn from "../assets/images/drop-down-line.svg";
import Prev from "../assets/images/prev.svg";
import Next from "../assets/images/next.svg";
import { Link } from "react-router-dom";

function Claims() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };
  return (
    <div className="claim-main">
      <div className="section-heading">
        <Row>
          <Col md={1} xl={1} sm={6}>
            <h1>Claims</h1>{" "}
          </Col>
          <Col md={3} xl={3} sm={6}>
            <div className="claims-select">
              <select>
                <option selected value={""}>
                  Month
                </option>
              </select>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="claims-select">
              <select>
                <option selected value={""}>
                  Year
                </option>
              </select>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="claims-select">
              <select>
                <option selected value={""}>
                  Center
                </option>
              </select>
            </div>
          </Col>
          <Col md={2} xl={2} sm={6}>
            <button className="add-sub-btn-claims">+ Upload Claims</button>
          </Col>
        </Row>

        <div>
          <Row>
            <Col md={6} lg={3} sm={4}>
              <div className="box-totle">
                <div className="boxsess-claims">
                  <div className="bx-dtl">
                    <h3>Total Amount Claims</h3>
                    <p className="claim-p">$454,000</p>
                  </div>
                  <img className="icn-box-claims" src={Doc} alt="img" />
                </div>
              </div>
            </Col>

            <Col md={6} lg={3} sm={4}>
              <div className="box-totle">
                <div className="boxsess-claims">
                  <div className="bx-dtl">
                    <h3>Total Debit</h3>
                    <p className="claim-p">$454,000</p>
                  </div>
                  <img className="icn-box-claims" src={Wallet} alt="img" />
                </div>
              </div>
            </Col>

            <Col md={6} lg={3} sm={4}>
              <div className="box-totle">
                <div className="boxsess-claims">
                  <div className="bx-dtl">
                    <h3>Total number of Claims</h3>
                    <p className="claim-p">$213</p>
                  </div>
                  <img className="icn-box-claims" src={RedWallet} alt="img" />
                </div>
              </div>
            </Col>

            <Col md={6} lg={3} sm={8}>
              <div className="box-totle">
                <div className="boxsess-claims">
                  <div className="bx-dtl">
                    <h3>Number of centers</h3>
                    <p className="claim-p">$213</p>
                  </div>
                  <img className="icn-box-claims" src={Dollar} alt="img" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="top-spenders city-lst">
        <div className="subscriber-table-header">
          <h2>Applications</h2>
        </div>

        <Table striped bordered hover className="table-responsive subs-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Medical Center...</th>
              <th>Batch Number</th>
              <th>Claims Number</th>
              <th>Claim Date</th>
              <th>Submission Date</th>
              <th>Payment Date</th>
              <th>Claim Amount</th>
              <th>Status</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Lib insurance</td>
              <td>12332</td>
              <td>12332</td>
              <td>01/12/2021</td>
              <td>08/09/2022</td>
              <td>08/09/2022</td>
              <td>$1,798,212</td>

              <td>
                <span className="table-inactive">Pending</span>
              </td>
              <td>
                <Form.Check type="switch" id="custom-switch" />
              </td>
              <td>
                <Link className="table-link">View Resaon</Link>
              </td>
              <td>
                <img src={Menuicn} alt="img" />
              </td>
            </tr>
            <tr style={{ display: isShown ? "none" : "revert" }}>
              <td colspan="6">
                <div className="usr-dtl">
                  <form>
                    <Row className="align-items-center">
                      <Col md={9}>
                        <Row>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Surname</label>
                              <input type="text" placeholder="Search" />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Position</label>
                              <input type="text" placeholder="Employer" />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="text"
                                placeholder="xyz@example.com"
                              />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Address</label>
                              <input
                                type="text"
                                placeholder="ul. Skrajna 7, Szczecin 70-886"
                              />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Name</label>
                              <input type="text" placeholder="Search" />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>DOB</label>
                              <input type="text" placeholder="12/12/12" />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Mobile</label>
                              <input type="number" placeholder="+0123456789" />
                            </div>
                          </Col>
                          <Col lg={3} md={4}>
                            <div className="form-group">
                              <label>Status</label>
                              <select>
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Pending</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={3} className="sup-btn">
                        <button className="updt-btn">Save</button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Lib insurance</td>
              <td>12332</td>
              <td>12332</td>
              <td>01/12/2021</td>
              <td>08/09/2022</td>
              <td>08/09/2022</td>
              <td>$1,798,212</td>

              <td>
                <span className="table-table-inactive-complete">Complete</span>
              </td>
              <td>
                <Form.Check type="switch" id="custom-switch" />
              </td>
              <td>
                <Link>View Resaon</Link>
              </td>
              <td>
                <img src={Menuicn} alt="img" />
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

export default Claims;
