import React from "react";
import { useState } from "react";
const CounterContent = () => {
  const buttonArr = [1, 10, 100, 1000];
  const [value, setValue] = useState(0);

  return (
    <div
      className="tab-pane fade"
      id="v-pills-counter"
      role="tabpanel"
      aria-labelledby="v-pills-counter-tab"
      tabIndex="0"
    >
      <div className="container">
        <div className="row">
          {buttonArr.map((val, idx) => (
            <div className="d-grid col-sm" key={idx}>
              <button
                type="button"
                className="btn btn-info"
                value={val}
                onClick={() => setValue(value + val)}
              >
                {val}
              </button>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col">
            <h3 className="text-center">{value}</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setValue(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterContent;
