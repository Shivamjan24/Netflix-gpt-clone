import { useSelector } from "react-redux";
import { userlogo } from "../utils/URL";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () =>{
   const dispatch=useDispatch();
   const [userr,setuserr]=useState(false);
   const navigate=useNavigate();
   const namee=useSelector((store)=>store?.user?.email);
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
        setuserr(true);
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browsing");
    } 

    else {
        console.log("one");
        dispatch(removeUser());
        setuserr(false);
        navigate("/");
        // User is signed out 
    }
    });
},[]);
    return(
        <div className="absolute w-screen px-8 py-2 z-10 flex flex-col md:flex-row justify-between bg-gradient-to-b from-black">
            <div className="relative">
                <img className="w-48 ml-32 mt-4 brightness-125" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
            </div>
            <div className="flex p-2 justify-between">
                {userr && (<div><button className="bg-red-600 text-white rounded-lg py-1 px-2 mt-4 mr-3" onClick={handlesignout}>SIGN-OUT</button></div>)}
                {userr && (<div>
                <img src={userlogo} className="w-8 mt-4 mr-6" alt="userlogo"/> </div>
                )}
            </div>
            {namee && (<div className="font-bold text-lg text-white mt-4 ml-8">{namee}</div>)}
        </div>
    );
}
 
export default Header;
