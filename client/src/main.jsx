import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import Item from "./pages/Item.jsx";
import Skincare from "./pages/Skincare.jsx";
import Checkout from "./pages/Checkout.jsx";
import Bodycare from "./pages/Bodycare.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/skincare", 
        element: <Skincare />,
      },
      {
        path: "/bodycare", 
        element: <Bodycare />,
      },
      {
        path: "/checkout", 
        element: <Checkout />,
      },
      {
        path: "/items/:id",
        element: <Item />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
