import React, { useState } from "react";
import Show from "./Show";
// import Defa from "./Default";

const Search=()=>{
// const options=['Comedy',"Romance","Horror","Drama"];

    const [genre,setGenre]=useState("");
    // const [search,setSearch]=useState("");
    const change=(obj)=>{
        setGenre(obj.target.value);
    }

    // const showChange=()=>{
    //     // setSearch(genre);
    //     console.log(genre);    
    // }

    const prevent=(obj)=>{
        obj.preventDefault();
    }

 return(<>
    <form onSubmit={prevent} className="form">
        <select value={genre} onChange={change} className="select">
            <option value="" selected disabled>Select any one Genre</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Romantic Comedy">Romantic Comedy</option>
            <option value="Fantasy">Fantasy</option>

        </select>
        {/* <button type="submit" onClick={showChange}>Search</button> */}
    </form>
       
    <Show name={genre}/>
 </>)
};

export default Search;