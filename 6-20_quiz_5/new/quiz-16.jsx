// See the below code snippet and advise, will there be any issue making a REST API call in a component’s useEffect hook?

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://yesno.wtf/api").then((response) => {
      setData(response.data);
    });

    return () => {
      // cancel API
    }
  }, []);
 
  return <div>{data.map((d) => <p>{d.text}</p>)}</div>;
}