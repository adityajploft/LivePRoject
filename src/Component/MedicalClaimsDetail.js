import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PDFViewer from "pdf-viewer-reactjs";

import Acceptclaim1 from "../assets/images/accept-claim-1.svg";
import Crossclaim1 from "../assets/images/cross-claim-1.svg";
import Nextpdf from "../assets/images/next-pdf.svg";
import Pdfgen from "../assets/images/pdf-gen.pdf";
import Pdfthum from "../assets/images/pdf-thum.png";


import "react-datepicker/dist/react-datepicker.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { useSelector } from "react-redux";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

function MedicalClaimsDetail() {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageLabel,
  } = pageNavigationPluginInstance;

  const {} = useSelector((state) => state.fetchdata);

  const [loader] = useState(false);
  // Manage using Redux after logic
  const [showDiv, setShowDiv] = useState("first");
  const [filterview] = useState(true);

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
                <Col lg={3} md={3}>
                  <div className="flter d-inline">
                    <label>Filter</label>
                    <select>
                      <option value={""} selected>
                        Filter
                      </option>
                    </select>
                  </div>
                </Col>
                <Col lg={3} md={3}>
                  <div className="flter d-inline">
                    <label>Filter</label>
                    <select>
                      <option value={""} selected>
                        Filter
                      </option>
                    </select>
                  </div>
                </Col>
                <Col lg={3} md={3}>
                  <div className="flter d-inline">
                    <label>Filter</label>
                    <select>
                      <option value={""} selected>
                        Filter
                      </option>
                    </select>
                  </div>
                </Col>
                <Col lg={3} md={3}>
                  <div className="flter d-inline">
                    <label>Filter</label>
                    <select>
                      <option value={""} selected>
                        Filter
                      </option>
                    </select>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={showDiv !== "first" ? "active_div" : "card-info-detl"}>
          <Row>
            <Col md={6}>
              <div className="crd-info">
                <ul className="crd-dtl">
                  <li>
                    <span>Subscriber Id :</span> 24324324
                  </li>
                  <li>
                    <span> Patient Name :</span> Patient Name
                  </li>
                  <li>
                    <span> Claim ID :</span> 4567
                  </li>
                  <li>
                    <span> Service Date :</span> 2/21/2023
                  </li>
                  <li>
                    <span> Gender :</span> Male
                  </li>
                  <li>
                    <span> Age :</span> 32
                  </li>
                  <li>
                    <span> Medical Center :</span> Medical Center Name
                  </li>
                  <li>
                    <span>Institution :</span> Institution Name
                  </li>
                </ul>
              </div>

              <table className="clms-drl-tbl border-1">
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
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="acc-refle-btn">
                <button
                  className="red-clr"
                  onClick={() => {
                    setShowDiv("second");
                  }}
                >
                  Reject
                </button>
                <button
                  onClick={() => {
                    setShowDiv("second");
                  }}
                >
                  Accept
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div className="pdf-tle">
                <h2>
                  New Pdf{" "}
                  <CurrentPageLabel>
                    {(props) => (
                      <span variant="subtitle1">{`${props.currentPage + 1} of ${
                        props.numberOfPages
                      }`}</span>
                    )}
                  </CurrentPageLabel>
                </h2>
              </div>
              <div className="show-pdf-section">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    defaultScale={1}
                    fileUrl={Pdfgen}
                    plugins={[pageNavigationPluginInstance]}
                  />
                </Worker>
              </div>
              <div className="pagi-pdf">
                <GoToPreviousPage>
                  {(props) => (
                    <button disabled={props.isDisabled} onClick={props.onClick}>
                      <img className="pre-pdf-btn" src={Nextpdf} alt="img" />
                    </button>
                  )}
                </GoToPreviousPage>
                <GoToNextPage>
                  {(props) => (
                    <button disabled={props.isDisabled} onClick={props.onClick}>
                      <img className="next-pdf-btn" src={Nextpdf} alt="img" />
                    </button>
                  )}
                </GoToNextPage>
              </div>
              <div className="pdf-thamb">
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className={showDiv !== "second" ? "active_div" : "card-info-detl"}>
          <Row>
            <Col md={6}>
              <div className="crd-info">
                <ul className="crd-dtl">
                  <li>
                    <span>Subscriber Id :</span> 157854684
                  </li>
                  <li>
                    <span> Patient Name :</span> Patient Name
                  </li>
                  <li>
                    <span> Claim ID :</span> 2584
                  </li>
                  <li>
                    <span> Service Date :</span> 2/25/2023
                  </li>
                  <li>
                    <span> Gender :</span> Male
                  </li>
                  <li>
                    <span> Age :</span> 40
                  </li>
                  <li>
                    <span> Medical Center :</span> Medical Center Name
                  </li>
                  <li>
                    <span>Institution :</span> Institution Name
                  </li>
                </ul>
              </div>

              <table className="clms-drl-tbl border-1">
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
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Service 1</td>
                    <td>Package 1</td>
                    <td className="d-dlex">
                      <img className="me-3" src={Acceptclaim1} alt="img" />{" "}
                      <img src={Crossclaim1} alt="img" />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="acc-refle-btn">
                <button className="red-clr">Reject</button>
                <button>Accept</button>
              </div>
            </Col>
            <Col md={6}>
              <div className="pdf-tle">
                <h2>
                  New Pdf 1{" "}
                  <CurrentPageLabel>
                    {(props) => (
                      <span variant="subtitle1">{`${props.currentPage + 1} of ${
                        props.numberOfPages
                      }`}</span>
                    )}
                  </CurrentPageLabel>
                </h2>
              </div>
              <div className="show-pdf-section">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    defaultScale={1}
                    fileUrl={Pdfgen}
                    plugins={[pageNavigationPluginInstance]}
                  />
                </Worker>
              </div>
              <div className="pagi-pdf">
                <GoToPreviousPage>
                  {(props) => (
                    <button disabled={props.isDisabled} onClick={props.onClick}>
                      <img className="pre-pdf-btn" src={Nextpdf} alt="img" />
                    </button>
                  )}
                </GoToPreviousPage>
                <GoToNextPage>
                  {(props) => (
                    <button disabled={props.isDisabled} onClick={props.onClick}>
                      <img className="next-pdf-btn" src={Nextpdf} alt="img" />
                    </button>
                  )}
                </GoToNextPage>
              </div>
              <div className="pdf-thamb">
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
                <div className="img-thumb">
                    <img src={Pdfthum} alt="img" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MedicalClaimsDetail;
