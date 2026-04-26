import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Card from "../pages/Card";
import Result from "../pages/Result";
import Mypage from "../pages/Mypage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/write",
    element: <Write />,
  },
  { path: "/card", element: <Card /> },
  { path: "/result", element: <Result /> },
  { path: "/Mypage", element: <Mypage /> },
]);

export default router;
