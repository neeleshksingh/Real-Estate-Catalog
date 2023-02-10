import "./style/basic.css";

const Location = ({ formData, setFormData }) => {
  return (
    <div >
      <form action="">
        <div className="form">
          <div className="flex">
            <label htmlFor="property-type">Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              className="inp"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="price">*Area</label>
            <br />
            <select
              className="nego inp"
              value={formData.area}
              onChange={(event) =>
                setFormData({ ...formData, area: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Select Area
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="propertyAge">Address</label>
            <br />
            <input
              type="text"
              placeholder="Address"
              className="inp"
              value={formData.address}
              onChange={(event) =>
                setFormData({ ...formData, address: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="propertyAge">Latitude</label>
            <br />
            <input
              type="text"
              placeholder="Latitude"
              className="inp"
              value={formData.latitude}
              onChange={(event) =>
                setFormData({ ...formData, latitude: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="nego">City</label>
            <br />
            <select
              className="pApproved inp"
              value={formData.city}
              onChange={(event) =>
                setFormData({ ...formData, city: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Select City
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="pApproved">Pincode</label>
            <br />
            <input
              type="number"
              className="inp"
              placeholder="Select Pincode"
              value={formData.pincode}
              onChange={(event) =>
                setFormData({ ...formData, pincode: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="bLoan">Landmark</label>
            <br />
            <input
              type="text"
              className="inp"
              placeholder="Landmark"
              value={formData.landmark}
              onChange={(event) =>
                setFormData({ ...formData, landmark: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="bLoan">Longitude</label>
            <br />
            <input
              type="text"
              className="inp"
              placeholder="Longitude"
              value={formData.longitude}
              onChange={(event) =>
                setFormData({ ...formData, longitude: event.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Location;
