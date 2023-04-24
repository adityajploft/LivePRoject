import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Table, Modal } from "react-bootstrap";
import { Formik } from "formik";
// import { Provider, defaultTheme } from "@adobe/react-spectrum";

import Srch1 from "../assets/images/srch-1.svg";
import Loader from "../assets/images/ball-triangle.svg";
import Acceptclaims from "../assets/images/accept-claims.svg";
import Explanimg from "../assets/images/explan-img.png";
import Acceptclaim1 from "../assets/images/accept-claim-1.svg";
import Crossclaim1 from "../assets/images/cross-claim-1.svg";
import Timerclaim from "../assets/images/timer-claim.svg";
import Partialclalm from "../assets/images/partial-clalm.svg";
import Crossclaim from "../assets/images/cross-claim.svg";
// import { DateRangePicker } from "@adobe/react-spectrum";
import "react-datepicker/dist/react-datepicker.css";
import {
  AddDoctors,
  DoctorList,
  GetSchedulesByDoctor,
} from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ErrorComponent from "../Utils/ErrorComponent";
function MedicalClaims() {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.fetchdata);
  const { add_doctor_res } = useSelector((state) => state.submitdata);
  const [specialList] = useState([]);

  const [loader, setLoader] = useState(false);
  const [filterview] = useState(true);

  const [ setStopAPi] = useState(false);
  const [setSkip] = useState(0);

  const [ setSpecilatyFilter] = useState("");



  const [editsidecomponent, setEditSideComponent] = useState(false);
  const EditSideComponent = (e) => {
    setEditSideComponent(true);
  };

  return (
    <div>
      <div className="main-content">
        <div className="flter-section">
          <h3 class="fltr-drop">Filter</h3>
          <div className={filterview ? "mt-4" : "removefltr"}>
            <div className="slct-srt">
              <Row>
              <Col lg={4} md={3}>
                  <div className="filter-chek mt-4">
                    <div className="srch-text">
                      <input
                        type="text"
                        placeholder="Search here..."
                        // onChange={(e) => optimizedFn(e.target.value)}
                      />
                      <img src={Srch1} alt="img" />
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={3}>
                  <div className="flter d-inline">
                    <label>Institution</label>
                    <select
                      onChange={(e) => {
                        setSkip(0);
                        setStopAPi(false);
                        setSpecilatyFilter(e.target.value);
                      }}
                    >
                      <option value={""} selected>
                        --Select Speciality--
                      </option>

                      {specialList &&
                        specialList?.map((v, ia) => (
                          <option key={ia} value={v?.specialtyName}>
                            {v?.specialtyName}
                          </option>
                        ))}
                    </select>
                  </div>
                </Col>
                <Col lg={3} md={3}>
                  <div className="flter d-inline">
                    <label>Medical Center</label>
                    <select>
                      <option value="" selected>
                        Level
                      </option>
                      <option value="Intern">Intern</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div className="flter d-inline">
                    <label>Status</label>
                    <select>
                      <option value="" selected>
                      Accepted
                      </option>
                      <option value="Intern"> Pending</option>
                      <option value="Doctor"> Partial</option>
                      <option value="Doctor">  Refused</option>
                    </select>
                  </div>
                </Col> 
              </Row>
            </div>
          </div>
        </div>

        <div className="data-mdcl-cntr">
          <Row>
            <Col lg={editsidecomponent ? 8 : 12} md={12}>
              <div className="restet-tble">
                <h3>Data</h3>
                <div className="data-tble new-tble-sec">
                  {/* <Table className="table-responsive" onScroll={handleScroll}> */}
                  <Table>
                    <thead>
                      <tr>
                        <th>Subscriber Id</th>
                        <th>Patient Name</th>
                        <th>Claim ID</th>
                        <th>Service Date</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Medical Center</th>
                        <th>Institution</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn">
                            <img src={Acceptclaims} alt="img" /> Accepted
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn gray">
                            <img src={Timerclaim} alt="img" /> Pending
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn yellow">
                            <img src={Partialclalm} alt="img" /> Partial
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn red">
                            <img src={Crossclaim} alt="img" /> Refused
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn yellow">
                            <img src={Partialclalm} alt="img" /> Partial
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn gray">
                            <img src={Timerclaim} alt="img" /> Pending
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn">
                            <img src={Acceptclaims} alt="img" /> Accepted
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn gray">
                            <img src={Timerclaim} alt="img" /> Pending
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn yellow">
                            <img src={Partialclalm} alt="img" /> Partial
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn red">
                            <img src={Crossclaim} alt="img" /> Refused
                          </button>
                        </td>
                      </tr>
                      <tr onClick={(e) => EditSideComponent(e)}>
                        <td>24324324</td>
                        <td>Patient Name</td>
                        <td>4567</td>
                        <td>2/21/2023</td>
                        <td>Male</td>
                        <td>32</td>
                        <td>Medical Center Name</td>
                        <td>Institution Name</td>
                        <td>
                          <button className="stus-btn yellow">
                            <img src={Partialclalm} alt="img" /> Partial
                          </button>
                        </td>
                      </tr>
                      
                    </tbody>
                  </Table>
                  {/* {loader === true && stopapi === false ? (
                    <center>
                      <div className="loader-img text-center  m-5">
                        <img src={Loader} alt="img" />
                      </div>
                    </center>
                  ) : (
                    ""
                  )} */}
                  {loader === true ? (
                    <center>
                      <div className="loader-img text-center  m-5">
                        <img src={Loader} alt="img" />
                      </div>
                    </center>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Col>
            {editsidecomponent ? (
              <Col lg={4} md={12} className="trans-col">
                <div className="clms-expl-dtl mt-4">
                  <div className="explan-name-hdr">
                    <h4>Example Name</h4>
                    <p>Gender: Male</p>
                    <p>Claim ID: 4568</p>
                    <p>Medical Center: Medical Ceneter Name</p>
                  </div>
                  <div className="expl-img">
                    <img src={Explanimg} alt="img" />
                  </div>
                  <table className="clms-drl-tbl">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Package</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                      <tr>
                        <td>Service 1</td>
                        <td>Package 1</td>
                        <td className="d-dlex"><img className="me-3" src={Acceptclaim1} alt="img"/> <img src={Crossclaim1} alt="img"/> </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="acc-refle-btn">
                    <button>Accept All</button>
                    <button className="red-clr">Refuse All</button>
                  </div>
                </div>
              </Col>
            ) : (
              ""
              // <Col lg={4}>
              //   <center>
              //     <div className="loader-img text-center  m-5">
              //       <img src={Loader} alt="img" />
              //     </div>
              //   </center>
              // </Col>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MedicalClaims;
