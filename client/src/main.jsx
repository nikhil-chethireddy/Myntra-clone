import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import itemsStore from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Bag />,
        path: "/bag",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={itemsStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
