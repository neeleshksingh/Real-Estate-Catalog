import "./style/basic.css";

const General = ({ formData, setFormData }) => {
  return (
    <div>
      <form action="">
        <div className="form">
          <div className="flex">
            <label htmlFor="property-type">Name</label>
            <br />
            <input
              type="text"
              placeholder="Owner"
              className="inp"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="price">Posted By</label>
            <br />
            <select
              className="nego inp"
              value={formData.postedBy}
              onChange={(event) =>
                setFormData({ ...formData, postedBy: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Posted By
              </option>
              <option value="1">Owner</option>
              <option value="2">Agent</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="propertyAge">Featured Package</label>
            <br />
            <select
              className="nego inp"
              value={formData.featuredPkg}
              onChange={(event) =>
                setFormData({ ...formData, featuredPkg: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Please Select
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="flex cam-flex">
            <div className="cam">
              <img
                className="cam-logo"
                src={require("../image/Vector.png")}
                alt=""
              />
              <img
                className="cam-logo-1"
                src={require("../image/vector1.png")}
                alt=""
              />
            </div>
            <div className="font">Add Photo</div>
          </div>
          <div className="flex">
            <label htmlFor="nego">*Mobile</label>
            <br />
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="inp"
              value={formData.mobile}
              onChange={(event) =>
                setFormData({ ...formData, mobile: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="pApproved">Sale Type</label>
            <br />
            <select
              className="pApproved inp"
              value={formData.saleType}
              onChange={(event) =>
                setFormData({ ...formData, saleType: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Please Select
              </option>
              <option value="1">Land</option>
              <option value="2">Residential</option>
              <option value="3">Commercial</option>
              <option value="4">Industrial</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="bLoan">*PPD Package</label>
            <br />
            <input
              type="text"
              className="inp"
              placeholder="Please Select"
              value={formData.ppd}
              onChange={(event) =>
                setFormData({ ...formData, ppd: event.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default General;
