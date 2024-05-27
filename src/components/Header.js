import { useSelector } from "react-redux";
import { userlogo } from "../utils/URL";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleinside } from "../utils/GPTSlice";

const Header = () =>{
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const namee=useSelector((store)=>store?.user);
   const isgpt= useSelector(store => store?.GPT?.insideGPT);
   const handlegptsearch = () =>{
        dispatch(toggleinside());
   }
   const handlesignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browsing");
    } 

    else {
        console.log("one");
        dispatch(removeUser());
        navigate("/");
        // User is signed out 
    }
    });
},[]);
    return(
        <div className="absolute w-screen px-8 py-2 z-10 flex flex-col md:flex-row justify-between bg-gradient-to-b from-black">
            <div className="relative">
                <img className="md:w-48 w-40 md:ml-32 mx-auto mt-4 brightness-125" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            </div>
            <div className="flex p-2 justify-between">
                {namee && (<div><button className="bg-purple-800 text-white rounded-lg py-1 px-2 md:px-4 mt-4 mr-3 hover:opacity-80 hover:bg-white hover:text-purple-800 hover:font-bold" onClick={handlegptsearch}>{isgpt ? "HOMEPAGE" : "GPT-SEARCH"}</button></div>)}
                {namee && (<div><button className="bg-red-600 text-white rounded-lg py-1 px-2 md:px-4 mt-4 mr-3 hover:opacity-80 hover:bg-white hover:text-red-600 hover:font-bold" onClick={handlesignout}>SIGN-OUT</button></div>)}
                {namee && (<div>
                <img src={userlogo} className="hidden md:inline-block w-10 mt-4 mx-6" alt="userlogo"/> </div>
                )}
            </div>
        </div>
    );
}
 
export default Header;
