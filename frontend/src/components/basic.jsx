import "./style/basic.css";

const Basic = ({ formData, setFormData }) => {
  return (
    <div >
      <form action="">
        <div className="form">
          <div className="flex">
            <label htmlFor="property-type fonts">*Property Type</label>
            <br />
            <select
              className="ptype inp"
              value={formData.propertyType}
              onChange={(event) =>
                setFormData({ ...formData, propertyType: event.target.value })
              } required
            >
              <option value="" disable selected hidden>
                Select Property Type
              </option>
              <option value="Plot">Plot</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="number"
              placeholder="Example: 10000"
              className="inp"
              id="price"
              value={formData.price}
              onChange={(event) =>
                setFormData({ ...formData, price: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="propertyAge">Property Age</label>
            <br />
            <input
              type="number"
              placeholder="Select Property Age"
              className="inp"
              id="pAge"
              value={formData.propertyAge}
              onChange={(event) =>
                setFormData({ ...formData, propertyAge: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="pdesc">Property Description</label>
            <br />
            <input
              type="text"
              className="inp"
              id="pdesc"
              value={formData.propertDesc}
              onChange={(event) =>
                setFormData({ ...formData, propertDesc: event.target.value })
              }
            />
          </div>
          <div className="flex">
            <label htmlFor="nego">Negotable</label>
            <br />
            <select
              className="nego inp"
              value={formData.negotable}
              onChange={(event) =>
                setFormData({ ...formData, negotable: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Select Negotable
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="pApproved">Property Approved</label>
            <br />
            <select
              className="pApproved inp"
              value={formData.propertApprov}
              onChange={(event) =>
                setFormData({ ...formData, propertApprov: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Property Approved
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="bLoan">Bank Loan</label>
            <br />
            <select
              className="bLoan inp"
              value={formData.bankLoan}
              onChange={(event) =>
                setFormData({ ...formData, bankLoan: event.target.value })
              }
            >
              <option value="" disable selected hidden>
                Bank Loan
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Basic;
