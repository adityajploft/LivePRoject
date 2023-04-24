import React, { useCallback, useEffect, useState } from "react";
import {
  Col,
  OverlayTrigger,
  ProgressBar,
  Row,
  Table,
  Modal,
  Tooltip,
} from "react-bootstrap";
import _ from "lodash";
import DatePicker from "react-datepicker";
import { Formik } from "formik";
// import { Provider, defaultTheme } from "@adobe/react-spectrum";

import { Link, useNavigate } from "react-router-dom";
// import Addpin from "../assets/images/add-pin.svg";

import Srch1 from "../assets/images/srch-1.svg";
import Dlteeimg from "../assets/images/dltee-img.svg";
import Uploadimgse from "../assets/images/upload-img-1.svg";
import Indlt from "../assets/images/in-dlt.svg";
import Loader from "../assets/images/ball-triangle.svg";
import Facebookicn from "../assets/images/facebook-10.svg";
import { TiTick } from "react-icons/ti";
import Webicon from "../assets/images/web-icon.svg";
import Mdclicon from "../assets/images/mdcl-cntr-icon.svg";
import Edit3 from "../assets/images/edit-3.svg";
import Edit4 from "../assets/images/edit-2.svg";
import Filtericon from "../assets/images/filter-icon.svg";
import { AiFillDelete } from "react-icons/ai";
// import { DateRangePicker } from "@adobe/react-spectrum";
import Avatar from "../assets/images/avatar.svg";
import Rngedae from "../assets/images/rnge-dae.svg";
import "react-datepicker/dist/react-datepicker.css";
import {
  AddDoctors,
  DeleteSchdeule,
  DeleteSchdeuleOneByOne,
  DoctorList,
  GetSchedulesByDoctor,
  GetSchedulesByDoctorForScdhule,
  MedicalCenterListForModal,
  MedicalSpecialList,
  UpdateDoc,
  createSchedulesByDoctor,
  createSchedulesByDoctorForScdeule,
  updateMedicalSchedule,
} from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { DoctorForm } from "../Utils/ValidatianSchema";
import ErrorComponent from "../Utils/ErrorComponent";
import moment from "moment";
import AddNewDoctorModal from "./Modals/AddNewDoctorModal";
import AssignHospitalToDoctor from "./Modals/DoctorModal/AssignHospitalToDoctor";
import UpdateDoctorForm from "./Modals/DoctorModal/UpdateDoctorForm";
// import { LinkedCalendar } from "rb-datepicker";
// import "bootstrap-daterangepicker/daterangepicker.css";
// import { parseDate } from "@internationalized/date";
function Doctor() {
  const dispatch = useDispatch();
  const {
    get_doctor_list,
    medical_special_list,
    schedule_res_doctor,
    medica_res,
    schdule_update_list,
  } = useSelector((state) => state.fetchdata);
  // const {  } = useSelector((state) => state.submitdata);
  const {
    cretate_schedule_res,
    update_medical_res,
    create_schdeule_Res_to_doctor,
    delete_schedule_one_by_one,
    add_doctor_res,
    update_doctor_res,
    delete_schedule,
    update_schedule_res,
  } = useSelector((state) => state.submitdata);
  const [dateRange, setDateRange] = useState([null, null]);
  const [doctorlist, setDoctorList] = useState([]);
  const [specialList, setSpecialList] = useState([]);
  const [startDate, endDate] = dateRange;

  const [loader, setLoader] = useState(true);
  const [loader1, setLoader1] = useState(true);
  const [searchq, SetsearchQuery] = useState("");
  const [filterview, setfilterView] = useState(true);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [updateform, setUpdateForm] = useState(false);
  const [top, setTop] = useState();
  const [stopapi, setStopAPi] = useState(false);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const [data, setData] = useState([]);
  const [sidebarList, setScheduleList] = useState([]);
  const [specialityFilter, setSpecilatyFilter] = useState("");

  const [editprofiles, setEditProfile] = useState();
  const [editsidecomponent, setEditSideComponent] = useState(false);
  const [medicaldata, setMedicalData] = useState([]);
  const [week, setWeekWithDate] = useState([]);
  const [week1, setWeekWithDate1] = useState([]);
  const [sidebarloader, setSidebarLoader] = useState(false);

  const editProfile = (e, data, schedule) => {
    e.preventDefault();
    // console.log("schedule", schedule, data);
    setEditProfile(data._id);
    if (editprofiles == data._id) {
      setEditProfile();
      setWeekWithDate([
        {
          startDate: data.startDate,
          endDate: data.endDate,
          timeslot: "",
          sunday: "",
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          scheduleId: data?.scheduleId,
        },
      ]);
    } else {
      setWeekWithDate([]);
      schedule?.map((val, index) => {
        return setWeekWithDate((pre) => [
          ...pre,
          {
            timeslot: val?.timeslot,
            startDate: val?.startDate,
            endDate: val?.endDate,
            sunday: val?.sunday,
            monday: val?.monday,
            tuesday: val?.tuesday,
            wednesday: val?.wednesday,
            thursday: val?.thursday,
            friday: val?.friday,
            saturday: val?.saturday,
            scheduleId: val?.scheduleId,
          },
        ]);
      });
      setEditProfile(data._id);
      // console.log("dats", datas);
      // setTotalWeekLength(datas?.length);
    }
  };

  const EditSideComponent = (e, val) => {
    e.preventDefault();
    setMedicalData(val);
    setEditSideComponent(true);
    setSidebarLoader(true);
    dispatch(GetSchedulesByDoctor(val?.doctorId));
    // window.scroll(0,0)
  };

  useEffect(() => {
    // setLoader(true);

    dispatch(MedicalSpecialList());
    dispatch(MedicalCenterListForModal());
  }, []);

  const APICall = (value) => {
    // setLoader(true);
    if (stopapi == false) {
      setLoader1(true);
      dispatch(DoctorList(skip, limit, specialityFilter, value));
    } else {
      setLoader(false);
      setLoader1(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    APICall();
  }, [skip, stopapi, specialityFilter]);

  const [count, setObjectCount] = useState();
  useEffect(() => {
    if (get_doctor_list) {
      // console.log("sss", get_doctor_list?.data);
      if (get_doctor_list?.data?.codeStatus === "200") {
        setLoader(false);
        // setDoctorList(get_doctor_list?.data?.data?.objectArray);
        setLoader1(false);
        if (skip == 0) {
          setDoctorList(get_doctor_list?.data?.data?.objectArray);
          setObjectCount(get_doctor_list?.data?.data?.objectCount);
        } else {
          let common = _?.differenceBy(
            get_doctor_list?.data?.data?.objectArray,
            doctorlist,
            "_id"
          );
          setDoctorList((pre) => [...pre, ...common]);
          // setDoctorList((pre) => [
          //   ...pre,
          //   ...get_doctor_list?.data?.data?.objectArray,
          // ]);
          setObjectCount(get_doctor_list?.data?.data?.objectCount);
          setLoader1(false);
        }
        // console.log("data", get_doctor_list?.data?.data?.hasMore)
        // for api stop
        // if (get_doctor_list?.data?.data?.objectCount == doctorlist?.length) {
        //   setStopAPi(true);
        //   setLoader(false);
        // }
        // // for api call
        // if (get_doctor_list?.data?.data?.objectCount > doctorlist?.length) {
        //   setStopAPi(false);
        //   setLoader(false);
        // }
      } else {
        Swal.fire({
          icon: "error",
          text: "Something Went Wrong",
        });
      }
    }
    return () => {
      dispatch({ type: "GET_DOCTOR_LIST", payload: "" });
    };
  }, [get_doctor_list]);

  useEffect(() => {
    if (medical_special_list) {
      // console.log("sss1", medical_special_list?.data?.data?.objectArray);
      if (medical_special_list?.data?.codeStatus === "200") {
        setSpecialList(medical_special_list?.data?.data?.objectArray);
      } else {
        Swal.fire({
          icon: "error",
          text: "Something Went Wrong",
        });
      }
    }
  }, [medical_special_list]);

  useEffect(() => {
    if (add_doctor_res) {
      // console.log("add_doctor_res", add_doctor_res)
      if (
        add_doctor_res?.data?.codeStatus == "200" ||
        add_doctor_res?.data?.codeStatus == "201"
      ) {
        // setSkip(0);

        setSpecilatyFilter("");
        setEditProfile();
        setEditSideComponent();
        setMedicalData([]);
        setEditSideComponent(false);
        setStopAPi(false);

        Swal.fire({
          icon: "success",
          text: add_doctor_res?.data?.message,
        });
        // setSkip(0)
        // setLimit(5)
        // setStopAPi(false)
        let skips = skip;
        dispatch(DoctorList(skips, limit, ""));
      } else if (add_doctor_res?.startsWith("doctors validation faile")) {
        Swal.fire({
          icon: "error",
          text: add_doctor_res?.substr(0, 26),
        });
      }
      // else {
      //   Swal.fire({
      //     icon: "error",
      //     text: add_doctor_res?.message,
      //   });
      // }
    }
    dispatch({ type: "ADD_DOCTOR_RES", payload: "" });
  }, [add_doctor_res]);

  useEffect(() => {
    if (update_doctor_res) {
      // console.log("update_doctor_res", update_doctor_res)
      if (
        update_doctor_res?.data?.codeStatus == "200" ||
        update_doctor_res?.data?.codeStatus == "201" ||
        update_medical_res
      ) {
        // setSkip(0);

        setSpecilatyFilter("");
        setEditProfile();
        setEditSideComponent();
        setMedicalData([]);
        setEditSideComponent(false);
        setStopAPi(false);

        Swal.fire({
          icon: "success",
          text: update_doctor_res?.data?.message,
        });
        // setSkip(0)
        // setLimit(5)
        // setStopAPi(false)
        let skips = skip;
        dispatch(DoctorList(0, limit, ""));
      } else if (update_doctor_res?.startsWith("doctors validation faile")) {
        Swal.fire({
          icon: "error",
          text: update_doctor_res?.substr(0, 26),
        });
      }
      // else {
      //   Swal.fire({
      //     icon: "error",
      //     text: add_doctor_res?.message,
      //   });
      // }
    }
    dispatch({ type: "ADD_DOCTOR_RES", payload: "" });
  }, [add_doctor_res]);

  useEffect(() => {
    if (update_doctor_res) {
      // console.log("sss1", update_doctor_res?.data?.data?.objectArray);
      if (
        update_doctor_res?.data?.codeStatus === "200" ||
        update_doctor_res?.data?.codeStatus === "201" ||
        update_doctor_res
      ) {
        // setSkip(0);
        setData([]);
        Swal.fire({
          icon: "success",
          text: update_doctor_res?.data?.message
            ? update_doctor_res?.data?.message
            : "Success",
        });

        // setSkip(0)
        // setLimit((pre) => pre + 10)

        setStopAPi(false);
        setSpecilatyFilter("");
        setEditProfile();
        // setEditSideComponent();
        setMedicalData([]);
        setEditSideComponent(false);
        setSkip(0);
        dispatch(DoctorList(0, limit, ""));
        // setData((pre) => [...pre, ...update_doctor_res?.data?.data]);
      } else {
        Swal.fire({
          icon: "error",
          text: update_doctor_res,
        });
      }
    }
    dispatch({ type: "UPDATE_DOCTOR_RES", payload: "" });
  }, [update_doctor_res]);

  // function handleScroll(e) {
  //   e.preventDefault();
  //   setTop(document.documentElement.scrollTop);

  //   if (top !== document.documentElement.scrollTop) {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       // setLoader(true);
  //       setSkip((pre) => pre + 5);
  //     }
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedFn = useCallback(
    debounce((valu) => {
      APICall(valu);
      setDoctorList([]);
    }),
    []
  );

  // get sidebar list api respons
  useEffect(() => {
    if (schedule_res_doctor) {
      if (schedule_res_doctor?.data?.codeStatus == "200") {
        setScheduleList(schedule_res_doctor?.data?.data?.objectArray);
        setSidebarLoader(false);
      } else {
        Swal.fire({
          icon: "error",
          text: "SomeThing Went Wrong",
          timer: 2000,
        });
        setEditSideComponent(false);
      }
      setSidebarLoader(false);
    }
    return () => {
      dispatch({ type: "GET_SCHEDULES_RES_DOCTOR", payload: "" });
    };
  }, [schedule_res_doctor]);

  useEffect(() => {
    if (medica_res) {
      if (medica_res?.data?.codeStatus == "200") {
        // setData(medica_res?.data?.data?.objectArray);
        setData(medica_res?.data?.data?.objectArray);
      } else {
        Swal.fire({
          icon: "error",
          text: "SomeThing Went Wrong",
          timer: 2000,
        });
      }
      setLoader(false);
    }
    return () => {
      dispatch({ type: "GET_DATA_MEDICAL_RESPONSE", payload: "" });
    };
  }, [medica_res]);

  const setWeekState = (e, index, weekdays) => {
    e.preventDefault();
    let newState = [...week];
    newState[index][weekdays] = e.target.checked;
    setWeekWithDate1(newState);
  };

  const SetNewWeekValue = (e, val) => {
    e.preventDefault();
    setWeekWithDate((pre) => [
      ...pre,
      {
        timeslot: "morning",
        startDate: "2023-04-05",
        endDate: "2025-02-03",
        price: 25,
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
      },
    ]);
  };

  const SetWeekDate = (e, index, date) => {
    e.preventDefault();
    let newState = [...week];
    newState[index][date] = e.target.value;
    setWeekWithDate1(newState);

    // console.log(moment(new Date(date)).format("DD-MMM-YYYY"));
  };

  const SetWeekEndDate = (e, index, date) => {
    e.preventDefault();
    let newState = [...week];
    newState[index][date] = e.target.value;
    setWeekWithDate1(newState);

    // console.log(moment(new Date(date)).format("DD-MMM-YYYY"));
  };
  const DeleteRow = (e, index) => {
    e.preventDefault();
    let data = [...week];
    data.splice(index, 1);
    // console.log("index", data);
    setWeekWithDate(data);
  };

  const setTimeSlot = (e, index) => {
    e.preventDefault();
    let newState = [...week];
    newState[index].timeslot = e.target.value;
    setWeekWithDate1(newState);
  };
  useEffect(() => {
    if (week1) {
      let data = [...week1];
      setWeekWithDate(data);
    }
  }, [week1]);

  const [updateapires, setUpateApi] = useState();
  const [price, setPrice] = useState();
  const UpdateScdehule = (e, scduleid, medicalid, medicalobje) => {
    setSidebarLoader(true);
    // console.log("ssd",medicalobje,medicaldata)
    // for (let i = 0; i < week?.length; i++) {
    //   setUpateApi(true);
    //   let data = {
    //     timeslot: week[i]?.timeslot,
    //     startDate: week[i]?.startDate,
    //     endDate: week[i]?.endDate,
    //     sunday: week[i]?.sunday,
    //     monday: week[i]?.monday,
    //     tuesday: week[i]?.tuesday,
    //     wednesday: week[i]?.wednesday,
    //     thursday: week[i]?.thursday,
    //     friday: week[i]?.friday,
    //     price: price,
    //     saturday: week[i]?.saturday,
    //   };
    //   // console.log("data",data)
    //   dispatch(updateMedicalSchedule(week[i]?.scheduleId, data));
    // }
    // setUpateApi(false);

    const newRow = week.filter((val) => {
      return !val?.scheduleId;
    });

    const oldRow = week.filter((val) => {
      return val?.scheduleId;
    });

    if (newRow) {
      for (let i = 0; i < newRow?.length; i++) {
        const data = {
          medicalCenterId: medicalobje?.medicalCenterId,
          doctorId: medicaldata?.doctorId,
          timeslot: newRow[i]?.timeslot,
          startDate: newRow[i]?.startDate,
          endDate: newRow[i]?.endDate,
          sunday: newRow[i]?.sunday,
          monday: newRow[i]?.monday,
          tuesday: newRow[i]?.tuesday,
          wednesday: newRow[i]?.wednesday,
          thursday: newRow[i]?.thursday,
          friday: newRow[i]?.friday,
          price: price ? parseInt(price) : 50,
          saturday: newRow[i]?.saturday,
        };
        // console.log("val",val)
        dispatch(createSchedulesByDoctorForScdeule(data));
      }
    }
    if (oldRow) {
      for (let i = 0; i < oldRow?.length; i++) {
        setUpateApi(true);
        let data = {
          timeslot: oldRow[i]?.timeslot,
          startDate: oldRow[i]?.startDate,
          endDate: oldRow[i]?.endDate,
          sunday: oldRow[i]?.sunday,
          monday: oldRow[i]?.monday,
          tuesday: oldRow[i]?.tuesday,
          wednesday: oldRow[i]?.wednesday,
          thursday: oldRow[i]?.thursday,
          friday: oldRow[i]?.friday,
          price: price,
          saturday: oldRow[i]?.saturday,
        };
        dispatch(updateMedicalSchedule(oldRow[i]?.scheduleId, data));
      }
      setUpateApi(false);
    }
  };

  useEffect(() => {
    if (cretate_schedule_res && update_schedule_res == "") {
      if (
        cretate_schedule_res?.data?.codeStatus == "200" ||
        cretate_schedule_res?.data?.codeStatus == "201"
      ) {
        setSidebarLoader(true);
        dispatch(GetSchedulesByDoctor(medicaldata?.doctorId));
        Swal.fire({
          icon: "success",
          text: cretate_schedule_res?.data?.message,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: cretate_schedule_res,
          timer: 2000,
        });
      }
      setLoader(false);
    }
    return () => {
      dispatch({ type: "CREATE_SCHEDULE_API_RES", payload: "" });
    };
  }, [cretate_schedule_res]);

  useEffect(() => {
    if (create_schdeule_Res_to_doctor) {
      if (
        create_schdeule_Res_to_doctor?.data?.codeStatus == "200" ||
        create_schdeule_Res_to_doctor?.data?.codeStatus == "201"
      ) {
        dispatch(GetSchedulesByDoctorForScdhule(medicaldata?.doctorId));
        setSidebarLoader(false);

        // Swal.fire({
        //   icon: "success",
        //   text: create_schdeule_Res_to_doctor?.data?.message,
        //   timer: 2000,
        // });
      } else {
        Swal.fire({
          icon: "error",
          text: create_schdeule_Res_to_doctor,
          timer: 2000,
        });
      }
      setSidebarLoader(false);
    }
    return () => {
      dispatch({ type: "CREATE_SCHEDULE_API_RES_SCDHULE", payload: "" });
    };
  }, [create_schdeule_Res_to_doctor]);

  useEffect(() => {
    if (schdule_update_list) {
      if (
        schdule_update_list?.data?.codeStatus == "200" ||
        schdule_update_list?.data?.codeStatus == "201" ||
        schdule_update_list
      ) {
        // setMedicalData([]);
        setWeekWithDate();
        setWeekWithDate1();
        setEditProfile([]);
        setSidebarLoader(false);
        setScheduleList(schdule_update_list?.data?.data?.objectArray);
      } else {
        Swal.fire({
          icon: "error",
          text: schdule_update_list,
          timer: 2000,
        });
      }
      setSidebarLoader(false);
    }
    return () => {
      dispatch({ type: "GET_SCHEDULES_RES_DOCTOR_SCHEDULE", payload: "" });
    };
  }, [schdule_update_list]);

  const DeleteScdule = (e, val) => {
    e.preventDefault();
    setSidebarLoader(true);
    dispatch(DeleteSchdeule(val?.scheduleId));
  };

  useEffect(() => {
    if (delete_schedule) {
      if (
        delete_schedule?.data?.codeStatus == "200" ||
        delete_schedule?.data?.codeStatus == "201" ||
        delete_schedule?.data.message
      ) {
        // setWeekWithDate();
        // setWeekWithDate1();
        setEditProfile([]);
        setSidebarLoader(false);
        dispatch(GetSchedulesByDoctor(medicaldata?.doctorId));
        Swal.fire({
          icon: "success",
          text: delete_schedule?.data?.message,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: delete_schedule?.message,
          timer: 2000,
        });
        setSidebarLoader(false);
      }
      setLoader(false);
    }
    return () => {
      dispatch({ type: "DELETE_SCHEDULE_RES", payload: "" });
    };
  }, [delete_schedule]);

  useEffect(() => {
    if (
      update_schedule_res &&
      updateapires == false &&
      cretate_schedule_res == ""
    ) {
      if (
        update_schedule_res?.data?.codeStatus == "200" ||
        update_schedule_res?.data?.codeStatus == "201" ||
        update_schedule_res
      ) {
        // setWeekWithDate();
        // setWeekWithDate1();
        setEditProfile([]);
        dispatch(GetSchedulesByDoctor(medicaldata?.doctorId));
        Swal.fire({
          icon: "success",
          text: "Schedule Update SuccessFully",
          timer: 2000,
        });
      } else {
        // Swal.fire({
        //   icon: "error",
        //   text: "Schedule Not Updated",
        //   timer: 2000,
        // });
      }
      setLoader(false);
    }
    return () => {
      dispatch({ type: "UPDATE_SCHEDULE_API_RES", payload: "" });
    };
  }, [update_schedule_res]);

  const LoadMore = () => {
    if (stopapi === false) {
      setLoader(true);
      setSkip((pre) => pre + 5);
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    // if (count == data?.length) {
    //   setStopAPi(true);
    //   setLoadMoreAlwways(false)
    // }
    // if (data_res?.data?.data?.objectCount >= data?.length) {
    // if (count > data?.length ) {
    //   setStopAPi(false);
    //   setLoadMoreAlwways(true)
    // }
    // if (count > data?.length) {
    //   setStopAPi(false);
    // }

    // console.log("data", count, doctorlist?.length, (skip + limit))

    if (count <= skip + limit) {
      setStopAPi(true);
      // setLoadMoreAlwways(false)
    } else {
      setStopAPi(false);
      setLoader(false);
    }
  }, [count, doctorlist]);

  const [totalshdule, setTotalSchduleLenght] = useState(false);
  const DeleteAllSchdeule = (e, val) => {
    e.preventDefault();
    console.log("delte", val);
    const scduleList = val?.scheduleList?.map((v) => {
      return v.scheduleId;
    });

    for (let i = 0; i < scduleList?.length; i++) {
      dispatch(DeleteSchdeuleOneByOne(scduleList[i]));
    }
    setTotalSchduleLenght(true);
  };

  useEffect(() => {
    if (delete_schedule_one_by_one && totalshdule) {
      if (
        delete_schedule_one_by_one?.data?.codeStatus == "200" ||
        delete_schedule_one_by_one?.data?.codeStatus == "201" ||
        delete_schedule_one_by_one
      ) {
        setWeekWithDate();
        setSidebarLoader(false);
        setWeekWithDate1();
        setEditProfile([]);

        dispatch(GetSchedulesByDoctor(medicaldata?.doctorId));
        Swal.fire({
          icon: "success",
          text: "Success",
          timer: 2000,
        });
      } else {
        // Swal.fire({
        //   icon: "error",
        //   text: delete_schedule_one_by_one?.message,
        //   timer: 2000,
        // });
      }
      setSidebarLoader(false);

      // setLoader(false);
    }
    return () => {
      dispatch({ type: "DELETE_SCHEDULE_RES_ONE_BY_ONE", payload: "" });
    };
  }, [delete_schedule_one_by_one]);

  return (
    <div>
      <div className="main-content">
        <div className="flter-section">
          <h3 class="fltr-drop">Filter</h3>
          <div className={filterview ? "mt-4" : "removefltr"}>
            <div className="slct-srt">
              <Row>
                <Col lg={2} md={3}>
                  <div className="flter d-inline">
                    <label>Filter by Speciality</label>
                    <select
                      onChange={(e) => {
                        setSkip(0);
                        setStopAPi(false);
                        setSpecilatyFilter(e.target.value);
                      }}
                      value={specialityFilter}
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
                <Col lg={2} md={3}>
                  <div className="flter d-inline">
                    <label>Filter by Level</label>
                    <select>
                      <option value="" selected>
                        Level
                      </option>
                      <option value="Intern">Intern</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                </Col>
                <Col lg={4} md={3}>
                  <div className="filter-chek mt-4">
                    <div className="srch-text">
                      <input
                        type="text"
                        placeholder="Search here..."
                        onChange={(e) => {
                          setLoader(true);
                          SetsearchQuery(e.target.value);
                          optimizedFn(e.target.value);
                        }}
                      />
                      <img src={Srch1} alt="img" />
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={3} className="text-end">
                  <div className="benfits-btn agn-btn">
                    <button onClick={() => setModalShow1(true)}>
                      + Add New Data
                    </button>
                    <AddNewDoctorModal
                      show={modalShow1}
                      onHide={() => setModalShow1(false)}
                      specialLists={specialList}
                    />
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
                <h3>Doctors</h3>
                <div className="data-tble fixheder-tbl mdcl-cntr">
                  {/* <Table className="table-responsive" onScroll={handleScroll}> */}
                  <Table>
                    <thead>
                      <tr>
                        <th>Doctor ID</th>
                        <th>Doctor Name</th>
                        <th>Gender</th>
                        <th>Specialty</th>
                        <th>Level</th>
                        <th>Birthdate (Age)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doctorlist &&
                        doctorlist?.map((val, i) => (
                          <tr
                            onClick={(e) => EditSideComponent(e, val)}
                            key={i}
                          >
                            <td>{val?.doctorId}</td>
                            <td>
                              {val?.firstName +
                                " " +
                                val?.middleName +
                                " " +
                                val?.lastName}
                            </td>
                            <td>{val?.gender}</td>
                            <td>{val?.specialty}</td>
                            <td>{val?.level}</td>
                            <td>{val?.birthdate} (Age)</td>
                          </tr>
                        ))}
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
                  {loader == true || loader1 == true ? (
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
              {!stopapi && loader === false ? (
                <center>
                  <button className="load-more-btn mb-5" onClick={LoadMore}>
                    {" "}
                    Load More{" "}
                  </button>
                </center>
              ) : (
                ""
              )}
            </Col>
            {editsidecomponent ? (
              !sidebarloader ? (
                <Col lg={4} md={12} className="trans-col">
                  <div className="mdcl-cntr-dtl">
                    <div className="cntr-hedr">
                      <div className="tle-cntr-name">
                        <img src={Mdclicon} alt="img" />
                        <div>
                          <h3>
                            {medicaldata?.firstName +
                              " " +
                              medicaldata?.middleName +
                              " " +
                              medicaldata?.lastName}{" "}
                            <span>
                              {/* {medicaldata?.city}, {medicaldata?.district} */}
                            </span>
                          </h3>
                          {/* <p>Street address</p> */}
                        </div>
                      </div>
                      <div>
                        <img
                          onClick={() => setUpdateForm(true)}
                          src={Edit3}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="cntr-hedr sdul-dr">
                      <h4>
                        3 Doctors Scheduled
                        <span>Closest Exparation Date is 15-09-2022</span>
                      </h4>
                      <button
                        onClick={() => setModalShow(true)}
                        className="wht-btn-br"
                      >
                        + Add Hospital
                      </button>
                      <AssignHospitalToDoctor
                        centerlist={data}
                        show={modalShow}
                        medicaldata={medicaldata}
                        previosMedical={sidebarList}
                        onHide={() => setModalShow(false)}
                      />

                      <UpdateDoctorForm
                        centerlist={data}
                        show={updateform}
                        specialLists={specialList}
                        medicaldata={medicaldata}
                        previosMedical={sidebarList}
                        onHide={() => setUpdateForm(false)}
                      />
                    </div>
                    <div className="cntr-hedr align-items-center">
                      <div class="srch-text">
                        <input type="text" placeholder="Search here..." />
                        <img src={Srch1} alt="img" />
                      </div>
                      <img
                        className="img-fluid ms-2"
                        src={Filtericon}
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="wrap-in-scroll">
                    {sidebarList &&
                      sidebarList?.map((val, index) => (
                        <div
                          className={
                            editprofiles?.includes(
                              val?.medicalCenterObject?._id
                            )
                              ? "lst-sdual edit-lst"
                              : "lst-sdual"
                          }
                        >
                          {editprofiles?.includes(
                            val?.medicalCenterObject?._id
                          ) ? (
                            <button
                              className="sdal-dlte cntr-btn-texx"
                              onClick={(e) => DeleteAllSchdeule(e, val)}
                            >
                              Delete
                            </button>
                          ) : (
                            ""
                          )}
                          <div className="user-dtl">
                            <div className="tle-cntr-name">
                              <img src={Avatar} alt="img" />
                              <h4>
                                {val?.medicalCenterObject?.name}
                                <span>ID : 123331</span>
                              </h4>
                            </div>
                            <img
                              src={Edit4}
                              alt="img"
                              onClick={(e) =>
                                editProfile(
                                  e,
                                  val?.medicalCenterObject,
                                  val?.scheduleList
                                )
                              }
                            />
                          </div>
                          <div className="speciality-dctr">
                            <p>
                              <label>Speciality:</label>
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id={`tooltip-${index}`}>
                                    <p>{medicaldata?.specialty}</p>
                                  </Tooltip>
                                }
                              >
                                <p>
                                  {medicaldata?.specialty?.substr(0, 10)}
                                  {medicaldata?.specialty?.substring(10) ? (
                                    <>....</>
                                  ) : (
                                    ""
                                  )}
                                </p>
                              </OverlayTrigger>
                            </p>
                            <p>
                              <label>Level:</label>
                              {medicaldata?.level}
                              {/* {val?.medicalCenterObject?.level} */}
                              {editprofiles?.includes(
                                val?.medicalCenterObject?._id
                              ) ? (
                                <span>
                                  <input
                                    type="text"
                                    placeholder="20 Dinar"
                                    name="money"
                                    defaultValue={val?.scheduleList?.[0]?.price}
                                    onChange={(e) => setPrice(e.target.value)}
                                  />
                                </span>
                              ) : (
                                <span>
                                  {val?.scheduleList?.[0]?.price} Dinar
                                </span>
                              )}
                            </p>
                          </div>

                          {editprofiles?.includes(
                            val?.medicalCenterObject?._id
                          ) ? (
                            <>
                              {week?.map((value, index) => (
                                <>
                                  <div className="time-section">
                                    <div className="mrng-time">
                                      <div>
                                        {editprofiles?.includes(
                                          val?.medicalCenterObject?._id
                                        ) ? (
                                          <div>
                                            <select
                                              name="timeslot"
                                              onChange={(e) =>
                                                setTimeSlot(e, index)
                                              }
                                              value={value?.timeslot}
                                            >
                                              <option value="morning">
                                                morning
                                              </option>
                                              <option value="afternoon">
                                                afternoon
                                              </option>
                                              <option value="evening">
                                                evening
                                              </option>
                                            </select>
                                            {/* <input
                                              type="checkbox"
                                              value={"monday"}
                                              onChange={(e) =>
                                                setWeekState(e, index, "monday")
                                              }
                                              checked={value?.monday}
                                            />{" "} */}
                                            <ul>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  value={"monday"}
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "monday"
                                                    )
                                                  }
                                                  checked={value?.monday}
                                                />{" "}
                                                <span>Mon</span>{" "}
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  value={"tuesday"}
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "tuesday"
                                                    )
                                                  }
                                                  checked={value?.tuesday}
                                                />{" "}
                                                <span>Tue</span>{" "}
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  value={"wednesday"}
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "wednesday"
                                                    )
                                                  }
                                                  checked={value?.wednesday}
                                                />{" "}
                                                <span>Wed</span>{" "}
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  value={"thursday"}
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "thursday"
                                                    )
                                                  }
                                                  checked={value?.thursday}
                                                />{" "}
                                                <span>Thu</span>{" "}
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "friday"
                                                    )
                                                  }
                                                  value={"friday"}
                                                  checked={value?.friday}
                                                />{" "}
                                                <span>Fri</span>{" "}
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "saturday"
                                                    )
                                                  }
                                                  value={"saturday"}
                                                  checked={value?.saturday}
                                                />{" "}
                                                <span>Sat</span>{" "}
                                              </li>
                                              <li>
                                                <input
                                                  type="checkbox"
                                                  onChange={(e) =>
                                                    setWeekState(
                                                      e,
                                                      index,
                                                      "sunday"
                                                    )
                                                  }
                                                  value={"sunday"}
                                                  checked={value?.sunday}
                                                />{" "}
                                                <span>Sun</span>{" "}
                                              </li>
                                            </ul>
                                          </div>
                                        ) : (
                                          <div>
                                            <p>{value?.timeslot}</p>
                                            <ul>
                                              <li
                                                className={
                                                  value?.monday ? "active" : ""
                                                }
                                              >
                                                Mon
                                              </li>
                                              <li
                                                className={
                                                  value?.tuesday ? "active" : ""
                                                }
                                              >
                                                Tue
                                              </li>
                                              <li
                                                className={
                                                  value?.wednesday
                                                    ? "active"
                                                    : ""
                                                }
                                              >
                                                Wed
                                              </li>
                                              <li
                                                className={
                                                  value?.thursday
                                                    ? "active"
                                                    : ""
                                                }
                                              >
                                                Thu
                                              </li>
                                              <li
                                                className={
                                                  value?.friday ? "active" : ""
                                                }
                                              >
                                                Fri
                                              </li>
                                              <li
                                                className={
                                                  value?.saturday
                                                    ? "active"
                                                    : ""
                                                }
                                              >
                                                Sat
                                              </li>
                                              <li
                                                className={
                                                  value?.sunday ? "active " : ""
                                                }
                                              >
                                                Sun
                                              </li>
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                      {editprofiles?.includes(
                                        val?.medicalCenterObject?._id
                                      ) ? (
                                        <>
                                          <div>
                                            <div className="date-rng dte-pck-input">
                                              <img src={Rngedae} alt="img" />
                                              <label>Date Range</label>
                                              {/* <DatePicker
                                            selectsRange
                                            startDate={
                                              new Date(value?.startdate)
                                            }
                                            endDate={new Date(value?.startdate)}
                                            onChange={(update) => {
                                              // console.log("ip", update);
                                              // setDateRange(update);
                                              setDatas(update);
                                            }}
                                            isClearable={false}
                                          /> */}
                                              {/* <DatePicker
                                            selectsRange={true}
                                            // startDate={startDate}
                                            // endDate={endDate}
                                            onChange={(update) => {
                                              setDateRange(update);
                                            }}
                                            isClearable={true}
                                          /> */}
                                              {/* <DatePicker
                                              showIcon
                                              // dateFormat={"DD-MM-YYYY"}
                                              name="startDate"
                                              selected={value?.startdate}
                                              onChange={SetWeekDate}
                                            /> */}
                                              <input
                                                type="date"
                                                // value={ConvertDate(
                                                //   value?.startdate
                                                // )}
                                                value={value?.startDate}
                                                // value={}
                                                onChange={(e) =>
                                                  SetWeekDate(
                                                    e,
                                                    index,
                                                    "startDate"
                                                  )
                                                }
                                              />
                                            </div>

                                            <div className="date1-rng dte-pck-input enddate mt-2">
                                              <img src={Rngedae} alt="img" />
                                              {/* <label>Date Range</label> */}
                                              {/* <DatePicker
                                            selectsRange
                                            startDate={
                                              new Date(value?.startdate)
                                            }
                                            endDate={new Date(value?.startdate)}
                                            onChange={(update) => {
                                              // console.log("ip", update);
                                              // setDateRange(update);
                                              setDatas(update);
                                            }}
                                            isClearable={false}
                                          /> */}
                                              {/* <DatePicker
                                            selectsRange={true}
                                            // startDate={startDate}
                                            // endDate={endDate}
                                            onChange={(update) => {
                                              setDateRange(update);
                                            }}
                                            isClearable={true}
                                          /> */}
                                              {/* <DatePicker
                                              showIcon
                                              // selected={value?.enddate}
                                              onChange={(date) => {
                                                console.log("date", date);
                                                setStartDate(date);
                                              }}
                                            /> */}

                                              <input
                                                type="date"
                                                // value={ConvertDate(value?.enddate)}
                                                value={value?.endDate}
                                                onChange={(e) =>
                                                  SetWeekEndDate(
                                                    e,
                                                    index,
                                                    "endDate"
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                          <div>
                                            {value?.scheduleId ? (
                                              <span
                                                className="dtl-icn-fun"
                                                onClick={(e) =>
                                                  DeleteScdule(e, value)
                                                }
                                              >
                                                <AiFillDelete
                                                  style={{
                                                    color: "red",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                              </span>
                                            ) : (
                                              <span
                                                onClick={(e) =>
                                                  DeleteRow(e, index)
                                                }
                                              >
                                                <AiFillDelete
                                                  style={{
                                                    color: "red",
                                                    cursor: "pointer",
                                                    marginLeft: "10px",
                                                  }}
                                                />
                                              </span>
                                            )}
                                          </div>
                                        </>
                                      ) : (
                                        <div className="date-rng date-clr">
                                          <label>Date Ranges</label>
                                          <span>
                                            <img src={Rngedae} alt="img" />
                                            {moment(value?.startDate).format(
                                              "LL"
                                            )}{" "}
                                            -{" "}
                                            {moment(value?.endDate).format(
                                              "LL"
                                            )}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </>
                              ))}
                              {editprofiles?.includes(
                                val?.medicalCenterObject?._id
                              ) ? (
                                <div className="ad-dse-apl">
                                  <button
                                    className="sdal-dlte"
                                    onClick={(e) =>
                                      editProfile(
                                        e,
                                        val.medicalCenterObject,
                                        val?.scheduleList
                                      )
                                    }
                                  >
                                    Reset
                                  </button>

                                  <p
                                    onClick={(e) =>
                                      SetNewWeekValue(
                                        e,
                                        val?.medicalCenterObject
                                      )
                                    }
                                    style={{ cursor: "pointer" }}
                                  >
                                    +Add More
                                  </p>
                                  <button
                                    className="sdal-aply"
                                    onClick={(e) =>
                                      UpdateScdehule(
                                        e,
                                        val?.scheduleList?.[0]?.scheduleId,
                                        val?.medicalCenterObject?._id,
                                        val?.medicalCenterObject
                                      )
                                    }
                                  >
                                    Apply
                                  </button>
                                </div>
                              ) : (
                                ""
                              )}
                            </>
                          ) : (
                            val?.scheduleList?.map((value, i) => (
                              <div className="time-section">
                                <div className="mrng-time">
                                  <div>
                                    <p>{value?.timeslot}</p>
                                    <ul>
                                      <li
                                        className={
                                          value?.monday ? "active" : ""
                                        }
                                      >
                                        Mon
                                      </li>
                                      <li
                                        className={
                                          value?.tuesday ? "active" : ""
                                        }
                                      >
                                        Tue
                                      </li>
                                      <li
                                        className={
                                          value?.wednesday ? "active" : ""
                                        }
                                      >
                                        Wed
                                      </li>
                                      <li
                                        className={
                                          value?.thursday ? "active" : ""
                                        }
                                      >
                                        Thu
                                      </li>
                                      <li
                                        className={
                                          value?.friday ? "active" : ""
                                        }
                                      >
                                        Fri
                                      </li>
                                      <li
                                        className={
                                          value?.saturday ? "active" : ""
                                        }
                                      >
                                        Sat
                                      </li>
                                      <li
                                        className={
                                          value?.sunday ? "active " : ""
                                        }
                                      >
                                        Sun
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="date-rng date-clr">
                                    <label>Date Range</label>
                                    <span>
                                      <img src={Rngedae} alt="img" />
                                      {moment(value?.startDate).format(
                                        "LL"
                                      )} - {moment(value?.endDate).format("LL")}
                                    </span>
                                  </div>
                                </div>
                                {/* <div className="mrng-time">
                                <div>
                                  <p>EVENING</p>
                                  <ul>
                                    <li className="active">Mon</li>
                                    <li className="active">Tue</li>
                                    <li>Wed</li>
                                    <li>Thu</li>
                                    <li className="active">Fri</li>
                                    <li>Sat</li>
                                    <li>Sun</li>
                                  </ul>
                                </div>
                                <div className="date-rng date-clr">
                                  <label>Date Range</label>
                                  <span>
                                    <img src={Rngedae} alt="img" /> 12 May, 2022
                                    - 12 May, 2022
                                  </span>
                                </div>
                              </div> */}
                              </div>
                            ))
                          )}
                        </div>
                      ))}
                  </div>
                </Col>
              ) : (
                <Col lg={4}>
                  <center>
                    <div className="loader-img text-center  m-5">
                      <img src={Loader} alt="img" />
                    </div>
                  </center>
                </Col>
              )
            ) : (
              ""
            )}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
