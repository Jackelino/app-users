import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home.jsx";
import About from "../views/About.jsx";
import Base from "../layout/Base.jsx";
import Create from "../views/Create.jsx";
import Update from "../views/Update.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Base/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/register",
                element: <Create/>,
            },
            {
                path: "/update/:userId",
                element: <Update/>,
            },
        ],
    },
]);