import {useNavigate} from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h3>Oops something went wrong!</h3>
      <button onClick={() => {navigate('/')}}>Go Home</button>
    </div>
  );
};

export default Error;
