/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Search } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../slices/notesSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(updateSearchQuery(event.target.value));
  };

  return (
    <>
      <div className="search mt-5">
        <Search fontSize="large" />
        <input
          placeholder="Search notes..."
          type="text"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchBar;
