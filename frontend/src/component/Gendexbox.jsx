import React from "react";

const Gendexbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="d-flex">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="Male"
          checked={selectedGender === "Male"}
          onChange={() => onCheckboxChange("Male")}
        />
        <label
          className={`form-check-label gap-2 cursor-pointer ${
            selectedGender === "Male" ? "selected" : ""
          }`}
          htmlFor="male"
        >
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
          checked={selectedGender === "Female"}
          onChange={() => onCheckboxChange("Female")}
        />
        <label
          className={`form-check-label gap-2 cursor-pointer ${
            selectedGender === "Female" ? "selected" : ""
          }`}
          htmlFor="female"
        >
          Female
        </label>
      </div>
    </div>
  );
};

export default Gendexbox;
