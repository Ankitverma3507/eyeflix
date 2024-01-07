import React,{useState, useEffect} from 'react'
import axios from "./axios"
function Row({title, fetchURL, isLargerow}) {

  const baseURL= "https://image.tmdb.org/t/p/original/";
    const [movies, setmovies]= useState([]);

    useEffect(()=>{
      async function fetchdata(){
        const request= await axios.get(fetchURL);
        setmovies(request.data.results);
        return request;
      }
      fetchdata();
    },[fetchURL]);//this here fetchurl as a conditonal beacuse this variable is used from the outside of the block
    
    console.log(movies);

  
  return (
    <div className='row'>
            <h2>{title}</h2>

            <div className="rowPosters flex overflow-x-auto overscroll-x-auto overflow-y-hidden p-4">
              {movies.map(movie=>(
                <img 
                key={movie.id}
                className={`rowPoster ${isLargerow && "rowPosterlarge"} w-[100%] object-contain max-h-[100px] mr-[10px] hover:scale-105 transition-transform duration-500 cursor-pointer`}
                src={`${baseURL}${isLargerow?movie.poster_path: movie.backdrop_path}`} 
                alt={movie.name} />
              ))}
            </div>
    </div>
  )
}

export default Row