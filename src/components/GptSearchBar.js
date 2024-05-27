import { useRef } from "react";
import openai from "../utils/openai";
import options from "../utils/options";
import { useDispatch } from "react-redux";
import { AddMovies, AddResults } from "../utils/GPTSlice";

const GptSearchBar = () =>  {
    const searchtext=useRef(null);
    const dispatch=useDispatch();
    const handlegptsearch = async () =>{
        console.log(searchtext.current.value);
        dispatch(AddMovies(searchtext.current.value));
        const data=await fetch('https://api.themoviedb.org/3/search/multi?query='+searchtext.current.value,options);
        const json=await data.json();
        /*const gptresult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchtext.current.value }],
            model: 'gpt-3.5-turbo',
          });*/
        console.log(json);
        dispatch(AddResults(json.results));
    }
	return (
	  <div className="absolute w-full z-10 flex justify-center mt-48 md:mt-32">
        <form className="pt-20 bg-black bg-opacity-80 grid grid-cols-12 px-4 pb-16 w-full md:w-9/12" onSubmit={(e) => e.preventDefault()}>
            <input type="text" ref={searchtext}  placeholder="what do you want to watch today?" className="rounded-lg col-span-9 py-2 px-4"/>
            <button onClick={handlegptsearch} className=" ml-2 bg-red-800 rounded-lg px-4 col-span-3 py-2 text-white hover:bg-white hover:text-red-800 hover:font-semibold">SEARCH</button>
        </form>
	  </div>
	);
}
export default GptSearchBar;
  