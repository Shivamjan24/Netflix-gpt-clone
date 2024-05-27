import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browsing from "./Browsing";
import GptSearchPage from "./GptSearchPage";


const Body = () =>{
    const Path=createBrowserRouter([
        {
            path:"/browsing",
            element:<Browsing/>,
        },
        {
            path:"/",
            element:<Login/>,
        },
    ]);
    return(
        <div>
            <RouterProvider router={Path}/>
        </div>
    );
};

export default Body;