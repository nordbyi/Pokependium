import React, { useState, useEffect } from "react";
import './Filter.css'

const Filter = ({ passFilter }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    passFilter(inputValue);
  }, [inputValue]);

  return (
    <div className="input-container">
      <input
        className="input"
        name="filterInput"
        placeholder="Filter Pokemon By Name"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
