import React, {useState, useEffect} from 'react'
import axios from './axios'
import request  from './request';
import './banner.css'
function Banner() {

    const [movie,setmovie]= useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const req= await axios.get(request.fetchNetflixOriginals)

            setmovie(
              req.data.results[
                Math.floor(Math.random()* req.data.results.length-1)
              ]
            );
            return req;
        }
        fetchdata();
    },[])

    // console.log(movie);

    function truncate(str,n){
      return str?.length>n ? str.substr(0,n-1)+"...": str;
    }
  return (
    <header className="banner text-white object-contain h-[448px]"
    
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
      backgroundPosition: "center center",
    }}
    >

    <div className="bannercontent ml-[30px] pt-[140px] h-[190px]">
        {/* title */}
        <h1 className="bannertitle text-[3rem] font-extrabold pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>

        {/* div ke 2 btn */}
        <div className="bannerbtns ">
          <button className="bannerbutton cursor-pointer text-white outline-none border-none font-bold px-[2rem] py-[0.5rem] bg-[rgba(51,51,51,0.5)] rounded-sm mr-4 hover:bg-[#e6e6e6] hover:text-black hover:scale-105 transition-transform duration-200">Play</button>
          <button className="bannerbutton cursor-pointer text-white outline-none border-none font-bold px-[2rem] py-[0.5rem] bg-[rgba(51,51,51,0.5)] rounded-sm mr-4 hover:bg-[#e6e6e6] hover:text-black hover:scale-105 transition-transform duration-200]">My List</button>
        </div>
        {/* description */}
        <h1 className='bannerdescription text-[0.8rem] w-[45rem] pt-[1rem] leading-5 max-w-[360px] h-[80px]'>{truncate(movie?.overview,150)}</h1>
    </div>
    <div className="bannerFadebottom "/>
    </header>
  )
}

export default Banner