// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
 
const router = createBrowserRouter([
    {
        name: '首页',
        path:'/',
        element: <Home />,
    }
])
 
export default router