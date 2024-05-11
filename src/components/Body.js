import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browsing from "./Browsing";

const Body = () =>{
    const Path=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browsing",
            element:<Browsing/>,
        },
    ]);
    return(
        <div>
            <RouterProvider router={Path}/>
        </div>
    );
};

export default Body;