import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Loginimg from "../assets/images/login-img.svg";
import User1 from "../assets/images/user-1.svg";
import Key from "../assets/images/key-1.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { LoginForm } from "../Utils/ValidatianSchema";
import { useDispatch, useSelector } from "react-redux";

import { Logins } from "../redux/actions/action";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Login_res } = useSelector((state) => state.auth);
  const handleSubmit = (values) => {
    dispatch(Logins(values));
  };

  useEffect(() => {
    if (Login_res) {
      if (Login_res?.data?.statusCode == "200") {
        // console.log("Login_res",Login_res?.data?.data?.username)
        localStorage.setItem("Zept_Auth_token_User", Login_res?.data?.token);
        localStorage.setItem("Zept_User", Login_res?.data?.data?.username);
        localStorage.setItem("Zept_UserId", Login_res?.data?.data?.userId);
        Swal.fire({
          icon: "success",
          text: Login_res?.data?.message,
          timer: 1200,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          text: "Something Went Wrong",
          timer: 1200,
        });
      }
    }
    return () => {
      dispatch({ type: "GET_LOGIN_RESPONSE", payload: "" });
    };
  }, [Login_res]);

  return (
    <div>
      <div className="login-apge">
        <Container fluid>
          <div className="box-items">
            <Row>
              <Col md={6}>
                <div className="lg-bg">
                  <img src={Loginimg} alt="img" />
                </div>
              </Col>
              <Col md={6}>
                <div className="lgn-frm-drl">
                  <h1>Welcome To Telemedicine!</h1>
                  <p>Lets start to quick login there...</p>

                  <Formik
                    initialValues={{
                      username: "",
                      password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={LoginForm}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form className="lgn-frm" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="User Name"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                          <img src={User1} alt="img" />
                        </div>
                        <span style={{ color: "#FF0000", fontSize: "17px" }}>
                          {" "}
                          {/* {values.email && touched.email && errors.email} */}
                          {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                          ) : null}
                        </span>
                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <img src={Key} alt="img" />
                        </div>
                        <span style={{ color: "#FF0000", fontSize: "17px" }}>
                          {" "}
                          {/* {values.email && touched.email && errors.email} */}
                          {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                          ) : null}
                        </span>
                        <div className="frg-pss text-end">
                          <Link to="/">Forgot Password</Link>
                        </div>
                        <div className="lgn-btn-btn">
                          <button>Login Now</button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
