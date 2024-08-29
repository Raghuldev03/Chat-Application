import React from "react";

const Gendexbox = () => {
  return (
    <div className="d-flex">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="Male"
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="Female"
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
    </div>
  );
};

export default Gendexbox;
