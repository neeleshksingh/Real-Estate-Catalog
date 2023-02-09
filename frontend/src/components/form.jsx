import Basic from "./basic";
import General from "./general";
import Property from "./property";
import Location from "./location";
import { useState } from "react";
import "./style/basic.css";
import axios from "axios";

const Form = () => {
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
    totalArea: "",
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
  const FormTitles = ["Sign Up", "Personal Info", "Other", "Location"];

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
      const { propertyType, mobile, ppd, area } = formData;
      const response = await axios.post("http://localhost:3016/basic", {
        propertyType,
        mobile,
        ppd,
        area,
      });
      console.log(response.data);
      alert("Data Submitted Successfully");
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };

  return (
    <div className="main">
      <div className="progressbar">
      <div className="bar-head font">
        <h1>ADD NEW PROPERTY</h1>
      </div>
        <div className="bar">
            <li className="li-bar">Basic Info</li>
            <li className="li-bar">Property Details</li>
            <li className="li-bar">General Info</li>
            <li className="li-bar">Location Info</li>
        </div>
      </div>
      <div className="container">
        <div className="body">{PageDisplay()}</div>
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
                console.log("Form canceled");
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
        </div>
      </div>
    </div>
  );
};


export default Form;