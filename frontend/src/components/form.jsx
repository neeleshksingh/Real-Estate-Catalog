import Basic from "./basic";
import General from "./general";
import Property from "./property";
import Location from "./location";
import { useState } from "react";
import "./style/basic.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    propertyType: "",
    price: "",
    propertyAge: "",
    propertyDesc: "",
    negotable: "",
    propertyApprov: "",
    bankLoan: "",
    length: "",
    Area: "",
    noofBhk: "",
    noofFloor: "",
    breath: "",
    carParking: "",
    electricity: "",
    name: "",
    postedBy: "",
    featurePkg: "",
    mobile: "",
    saleType: "",
    ppd: "",
    email: "",
    area: "",
    address: "",
    latitude: "",
    city: "",
    pincode: "",
    landmark: "",
    longitude: "",
  });
  const FormTitles = [
    "Basic Info",
    "Property Details",
    "General Info",
    "Location Info",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <Basic formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Property formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <General formData={formData} setFormData={setFormData} />;
    } else {
      return <Location formData={formData} setFormData={setFormData} />;
    }
  };
  const handleSubmit = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"))._id;
      const { propertyType, mobile, ppd, area, length, breath } = formData;
      
      if (!propertyType || !mobile || !ppd || !area || !length || !breath) {
        alert("Please fill out all the required fields marked with * before submitting the form.");
        return;
      }
      const response = await axios.post("http://localhost:3016/basic", {
        propertyType,
        mobile,
        ppd,
        area,
        length,
        breath,
        user,
      });
      console.log(response.data);
      alert("Data Submitted Successfully");
      navigate("/landing")
    } catch (error) {
      console.error(error);
      alert("error submitting form");
    }
  };

  return (
    <div className="main">
      <div className="progressbar">
        <div className="bar-head font">
          <h1>ADD NEW PROPERTY</h1>
        </div>
        <div className="bar">
          {FormTitles.map((title, index) => (
            <li className={`li-bar ${index === page ? "active" : ""}`}>
              {title}
            </li>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="body">{PageDisplay()}
        <div className="footer">
          {page !== 0 && (
            <button
              className="btn canc"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
          )}
          {page === 0 && (
            <button
              className="btn canc"
              onClick={() => {
                navigate("/landing");
              }}
            >
              Cancel
            </button>
          )}
          <button
            className="btn nex"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleSubmit();
              } else if (page < FormTitles.length - 1) {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1
              ? "Add Property"
              : "Save & Continue"}
          </button>
        </div></div>
        
      </div>
    </div>
  );
};

export default Form;
