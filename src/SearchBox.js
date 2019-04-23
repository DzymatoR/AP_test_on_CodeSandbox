import React from "react";

function SearchBox(props) {
  return (
    <div className="white">
      <h3>Search Box</h3>
      <input
        className="pa2 w-50 br3"
        type="text"
        placeholder="hledej jména"
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;
