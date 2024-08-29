import React from 'react'
import {IoSearchSharp} from "react-icons/io5"

const SearchInput = () => {
  return (
    <form className="d-flex align-items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="form-control rounded-pill"
      />
      <button type="submit" className="btn btn-primary rounded-circle">
        <IoSearchSharp className="h5 m-0" />
      </button>
    </form>
  );
}

export default SearchInput