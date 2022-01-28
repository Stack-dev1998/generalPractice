import React, { useState } from "react";

function InputSelect(props) {
  const [value, setValue] = useState("");
  let getValue = (e) => {
    console.log(e.target.value)
    setValue(e.target.value);
  };
  return (
    <div>
      <div class="select-editable">
        <select onChange={(e) => getValue(e)}>
          <option value=""></option>
          <option value="115x175 mm">115x175 mm</option>
          <option value="120x160 mm">120x160 mm</option>
          <option value="120x287 mm">120x287 mm</option>
        </select>
        <input
          type="text"
          name="format"
          onChange={(e) => {
            setValue(  e.target.value);
          }}
         value={value}
        />
      </div>
      <div>dfsdf</div>
    </div>
  );
}

export default InputSelect;
