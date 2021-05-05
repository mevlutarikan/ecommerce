<div className="form-group">
  <label htmlFor="inputAddress">Address</label>
  <input
    type="text"
    className="form-control"
    id="inputAddress"
    name="address"
    placeholder="1234 Main St, Apartment, studio, or floor"
  />
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" name="city" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputCountry">Country</label>
      <select id="inputCountry" className="form-control" name="country">
        <option defaultValue value="TR">
          Turkey
        </option>
        <option>...</option>
      </select>
    </div>
  </div>
</div>;
