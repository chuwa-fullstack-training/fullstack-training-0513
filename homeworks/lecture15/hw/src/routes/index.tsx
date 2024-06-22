import { createBrowserRouter } from "react-router-dom";
import App from '../App.tsx';
import Users from "../hw1/users.tsx";
import Login from "../hw1/login.tsx";
import UserDetail from "../hw1/detail.tsx";
import Hw2 from "../hw2/Hw2.tsx";
import Error from "../Error.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/hw1",
    element: <ProtectedRoute><Users /></ProtectedRoute>,
    errorElement: <Error />
  },
  {
    path: "/hw1/login",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/hw1/:name",
    element: <ProtectedRoute><UserDetail /></ProtectedRoute>,
    errorElement: <Error />
  },
  {
    path: "/hw2",
    element: <Hw2 />,
    errorElement: <Error />
  },
  {
    path: "/hw2/:id",
    element: <Hw2 />,
    errorElement: <Error />
  },
]);

export default router;