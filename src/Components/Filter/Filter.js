import React, { useState, useEffect } from "react";

const Filter = ({passFilter}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    passFilter(inputValue)
  }, [inputValue])

  return (
    <div>
      <input
        name="filterInput"
        placeholder="Filter Pokemon by Name"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
