import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayouts/>,
    children:[{
      path:'/',
      element: <Home/>,
    }],
  }
])