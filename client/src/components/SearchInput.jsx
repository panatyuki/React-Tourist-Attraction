import React from "react";
import PropTypes from "prop-types";

function SearchInput({ searchText, setSearchText }) {
  return (
    <div className="flex flex-col justify-center py-5">
      <h3 className="flex ml-96 text-2xl">ค้นหาที่เที่ยว</h3>
      <div className="flex justify-center">
        <input
          className="border-b-4 w-1/3 h-12 rounded-full text-center"
          onChange={(event) => setSearchText(event.target.value)}
          type="text"
          value={searchText}
          placeholder="หาที่เที่ยวแล้วไปกัน..."
        />
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchInput;

