import { createBrowserRouter } from "react-router";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        children :([
            {
                path:'/',
                element : <Home></Home>
            }
        ])

    }
])