import Header from "./Header";
import { useState,useRef } from "react";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { updateProfile } from "firebase/auth";
const Login = () =>{
    const [isSignIn,setisSignIn]=useState(true);
    const email=useRef(null);
    const passwrd=useRef(null);
    const namee=useRef(null);
    const [errorr,seterrorr]=useState(null);
    const handlesign = () =>{
        setisSignIn(!isSignIn);
    }
    const Validity = () =>{
        console.log(email.current.value);
        const ans=validate(email.current.value,passwrd.current.value);
        console.log(ans)
        //console.log(namee.current.value)
        seterrorr(ans);
        if(ans!==null)
            return;
        if(!isSignIn)
        {
            //Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value,passwrd.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: namee.current.value,
                    
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                //console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorr(errorMessage);
                // ..
            });
        }
        else
        {
            //Sign in Logic
            signInWithEmailAndPassword(auth,email.current.value,passwrd.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //console.log(user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorr(errorMessage);
            });
        }
    }
    return(
        <div>
            <Header/>
            <img className="w-full object-cover brightness-50 absolute" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"/>
            <form className="w-full md:w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
                <p className="text-2xl font-bold my-4">{isSignIn ? "Sign In" : "Sign Up"}</p> 
                {!isSignIn && (<input ref={namee} className="my-2 py-4 w-full rounded-md px-2 bg-gray-800 opacity-50 border border-white text-white" type="text" placeholder="Name"/>)}
                <input ref={email} className="my-2 py-4 w-full rounded-md px-2 bg-gray-800 opacity-50 border border-white text-white" type="text" placeholder="Email Address"/>
                <input ref={passwrd} className="my-2 py-4 w-full rounded-md px-2 bg-gray-800 opacity-50 border border-white text-white" type="password" placeholder="Password"/>
                {errorr && (<p className="text-red-600 font-semibold text-md">{errorr}</p>)}
                <button className="bg-red-600 rounded-lg py-2 w-full mt-2 mb-4" onClick={()=>Validity()}>{isSignIn ? "SIGN IN" : "SIGN UP"}</button>
                <p className="font-semibold text-md cursor-pointer" onClick={()=>handlesign()}>{isSignIn ? "New to Netflix? Sign-Up now" : "Already have an account? Sign-In"}</p>
            </form>
        </div>
    );
};

export default Login;