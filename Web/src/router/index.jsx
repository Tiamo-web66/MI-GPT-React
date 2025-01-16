// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Config from "../pages/config";
 
const router = createBrowserRouter([
    {
        name: '首页',
        path:'/',
        element: <Home />,
    },
    {
        name: '配置',
        path:'/config',
        element: <Config />,
    }
])
 
export default router