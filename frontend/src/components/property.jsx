import "./style/basic.css";

const Property = ({ formData, setFormData }) => {
  const handleLengthChange = (event) => {
    const length = parseInt(event.target.value, 10);
    if (length >= 0) {
      const area = length * formData.breath;
      setFormData({ ...formData, length, area });
    }
  };

  const handleBreathChange = (event) => {
    const breath = parseInt(event.target.value, 10);
    if (breath >= 0) {
      const area = formData.length * breath;
      setFormData({ ...formData, breath, area });
    }
  };
  return (
    <div>
      <form action="">
        <div className="form">
          <div className="flex">
            <label htmlFor="property-type">*Length</label>
            <br />
            <input
              type="number"
              placeholder="Example 1000"
              className="inp"
              value={formData.length}
              onChange={handleLengthChange}
            />
          </div>
          <div className="flex">
            <label htmlFor="price">*Total Area</label>
            <br />
            <input
              type="number"
              placeholder="Example: 7500"
              className="inp"
              id="price"
              value={formData.area}
              readOnly
            />
          </div>
          <div className="flex">
            <label htmlFor="propertyAge">No of BHK</label>
            <br />
            <select
              className="nego inp"
              value={formData.noofBhk}
              onChange={(event) =>
                setFormData({ ...formData, noofBhk: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Select No of BHK
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="pdesc">No of Floor</label>
            <br />
            <select
              className="nego inp"
              value={formData.noofFloor}
              onChange={(event) =>
                setFormData({ ...formData, noofFloor: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Select No of Floor
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="nego">*Breath</label>
            <br />
            <input
              type="number"
              placeholder="Example 1000"
              className="inp"
              value={formData.breath}
              onChange={handleBreathChange}
            />
          </div>
          <div className="flex">
            <label htmlFor="pApproved">Car Parking</label>
            <br />
            <select
              className="pApproved inp"
              value={formData.carParking}
              onChange={(event) =>
                setFormData({ ...formData, carParking: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Select Car Parking
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="bLoan">Electricity</label>
            <br />
            <input
              type="text"
              className="inp"
              placeholder="Example: 3 phase"
              value={formData.electricity}
              onChange={(event) =>
                setFormData({ ...formData, electricity: event.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Property;
