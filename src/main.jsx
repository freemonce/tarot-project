import { RouterProvider } from "react-router-dom"; // 라우터
import router from "./router"; // 내가 만든 라우터
import ReactDOM from "react-dom/client"; // 화면 렌더링

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
