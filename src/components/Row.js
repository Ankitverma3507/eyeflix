import React,{useState, useEffect} from 'react'
import axios from "./axios"
function Row({title, fetchURL}) {

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

            <div className="rowPosters flex ">
              {movies.map(movie=>(
                <img 
                className='rowPoster w-[100%] object-contain max-h-[100px]'
                src={`${baseURL}${movie.poster_path}`} 
                alt={movie.name} />
              ))}
            </div>
    </div>
  )
}

export default Row