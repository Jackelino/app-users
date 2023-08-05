import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home.jsx";
import About from "../views/About.jsx";
import Base from "../layout/Base.jsx";
import Create from "../views/Create.jsx";

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
                path: "/create",
                element: <Create/>,
            },
        ],
    },
]);