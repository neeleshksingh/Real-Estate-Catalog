import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style/basic.css'

const Basic = (props) => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    propertyType: "",
    negotable: "",
    price: "",
    ownership: "",
    propertyAge: "",
    propertyApprove: "",
    propertyDesc: "",
    bankLoan: "",
  });
  const handleform = async (e) => {
    e.preventDefault();
    handleError();
    let verify = data.propertyType.length;
    try {
      if (verify) {
        let info = {
            propertyType: data.propertyType,
            negotable: data.negotable,
            price: data.price,
            ownership: data.ownership,
            propertyAge: data.propertyAge,
            propertyApprove: data.propertyApprove,
            propertyDesc: data.propertyDesc,
            bankLoan: data.bankLoan,
          }
        let datas = await axios.post("http://localhost:3016/basic", info, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (datas) {
          setData({
            propertyType: "",
            negotable: "",
            price: "",
            ownership: "",
            propertyAge: "",
            propertyApprove: "",
            propertyDesc: "",
            bankLoan: "",
          });
          navigate("/property");
        }
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const handleCancel = ()=>{
    navigate("/")
  }
  const handleError = () => {
    if (!data.propertyType.length) {
      alert("Please select a property type.");
      return;
    }
  };
  return (
      <div className="container">
        <form action="">
        <div className="form">
          <div className="flex">
            <label htmlFor="property-type">{props.inp1}</label><br />
            <select className="ptype inp" name={data.propertyType}
                onChange={(e) =>
                  {setData({ ...data, propertyType: e.target.value })}
                }>
              <option value="" disable selected hidden>
                Select Property Type
              </option>
              <option value="plot">Plot</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="price">Price</label><br />
            <input type="number" placeholder="Example: 10000" className="inp" id="price" name={data.price}
                onChange={(e) =>
                  {setData({ ...data, price: e.target.value })}
                } />
          </div>
          <div className="flex">
            <label htmlFor="propertyAge">Property Age</label><br />
            <input type="number" placeholder="Select Property Age" className="inp" id="pAge" name={data.propertyAge}
                onChange={(e) =>
                  {setData({ ...data, propertyAge: e.target.value })}
                } />
          </div>
          <div className="flex">
            <label htmlFor="pdesc">Property Description</label><br />
            <input type="text" className="inp" id="pdesc" name={data.propertyDesc}
                onChange={(e) =>
                  {setData({ ...data, propertyDesc: e.target.value })}
                }/>
          </div>
          <div className="flex">
            <label htmlFor="nego">Negotable</label><br />
            <select className="nego inp" name={data.negotable}
                onChange={(e) =>
                  {setData({ ...data, negotable: e.target.value })}
                }>
              <option value="" disable selected hidden>
                Select Negotable
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="pApproved">Property Approved</label><br />
            <select className="pApproved inp" name={data.propertyApprove}
                onChange={(e) =>
                  {setData({ ...data, propertyApprove: e.target.value })}
                }>
              <option value="" disable selected hidden>
                Property Approved
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="bLoan">Bank Loan</label><br />
            <select className="bLoan inp" name={data.bankLoan}
                onChange={(e) =>
                  {setData({ ...data, bankLoan: e.target.value })}
                }>
              <option value="" disable selected hidden>
                Bank Loan
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          </div>
          <div className="btn">
            <button className="button btn1" onClick={(e)=>{handleCancel(e)}}>Cancel</button>
            <button type="submit" className="button btn2" onClick={(e)=>{handleform(e)}}>Save & Continue</button>
          </div>
        </form>

      </div>
  );
};
export default Basic;
