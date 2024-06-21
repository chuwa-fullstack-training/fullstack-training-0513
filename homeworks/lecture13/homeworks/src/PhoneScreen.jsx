import { useState } from "react";

const SingleApp = ({ id, name, onClick }) => (
  <div
    className="col d-flex justify-content-center align-items-center mx-1 my-1"
    style={{
      aspectRatio: "1 / 1",
      border: "1px solid",
      marginBottom: "5px",
    }}
    onClick={() => onClick(name)}
  >
    {name}
  </div>
);

const generateAppList = (size) => {
  return Array.from({ length: size }, (_, index) => ({
    id: (index + 1).toString().padStart(3, "0"),
    name: `App${index + 1}`,
  }));
};

const PhoneScreen = () => {
  const appList = generateAppList(20);
  const [selectedApp, setSelectedApp] = useState("Select an app");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-header text-center">{selectedApp}</div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {[...Array(5)].map((_, rowIndex) => (
              <div className="row" key={rowIndex}>
                {appList.slice(rowIndex * 4, rowIndex * 4 + 4).map((app) => (
                  <SingleApp
                    key={app.id}
                    id={app.id}
                    name={app.name}
                    onClick={setSelectedApp}
                  />
                ))}
              </div>
            ))}
          </ul>
        </div>
        <div className="card-body d-flex justify-content-center align-items-center">
          <button
            className="btn rounded-circle border"
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
