import React,{useState, useEffect} from 'react'
import axios from "./axios"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { motion } from "framer-motion"

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
    
    // console.log(movies);

    const opts= {
      height: "390",
      width: "100%",
      playerVars: {

          autoplay: 1,
      },
    };

    const [trailerURL, setTrailurl]= useState("");

  const handleclick= (movie)=>{
    if(trailerURL){
      setTrailurl('');
    }else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams= new URLSearchParams(new URL(url).search);
        setTrailurl(urlParams.get("v"));
      })
      .catch((error)=> console.log(error));
    }
  }
  return (
    <div className='row text-white p-2'>
            <h2>{title}</h2>

            <motion.div className="rowPosters flex overflow-x-auto overscroll-x-auto overflow-y-hidden p-4"
              whileHover={{scale:1.1, originX:0 }}
              transition={{type: 'spring', stiffness: 50}}
            >
              {movies.map(movie=>(
                <img 
                key={movie.id}
                onClick={()=> handleclick(movie)}
                className={`rowPoster ${isLargerow && "rowPosterlarge"} w-[100%] object-contain max-h-[100px] mr-[10px] hover:scale-105 transition-transform duration-250 ease-in-out cursor-pointer`}
                src={`${baseURL}${isLargerow?movie.poster_path: movie.backdrop_path}`} 
                alt={movie.name} />
              ))}
            </motion.div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  )
}

export default Row