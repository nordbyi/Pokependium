import React, { useState } from "react";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");

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
