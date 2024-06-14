import React, { useState } from "react";

const ConverterContent = () => {
  const [value, setValue] = useState("");
  const convertValue = () => {
    const convertedVal = parseInt(value);

    if (
      !isNaN(convertedVal) &&
      convertedVal.toString() === value &&
      value > 0
    ) {
      if (convertedVal === 1) {
        return convertedVal + "st";
      } else if (convertedVal === 2) {
        return convertedVal + "nd";
      } else if (convertedVal === 3) {
        return convertedVal + "rd";
      } else {
        return convertedVal + "th";
      }
    } else {
      return value;
    }
  };
  return (
    <div
      className="tab-pane fade"
      id="v-pills-converter"
      role="tabpanel"
      aria-labelledby="v-pills-converter-tab"
      tabIndex="0"
    >
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <input value={convertValue()} readOnly></input>
    </div>
  );
};

export default ConverterContent;
