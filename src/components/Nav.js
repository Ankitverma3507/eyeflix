import React, { useEffect, useState } from 'react'
import "./nav.css";
function Nav() {

    const [show, handleShow]= useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });

        // return ()=>{
        //     window.removeEventListener("scroll");
        // };
    },[])
  return (
    <div className={`nav ${show && "navBlack"}`}>
        <img  className="w-[80px] object-contain"src="https://imgs.search.brave.com/Cq4a7ZJ9p8iGv9uDOQMLa9o5cRLZ64en9mrDdTzg3-I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvTmV0ZmxpeC1M/b2dvLnBuZw" alt="NetflixLogo" />
        <img className="w-[30px] object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaxjZK8tqgjeHyXeZaerHOQgnEDm3ws0Qo0H7PBwJvoOoeXpiOuU_EklOa3YvSQZ1XzE&usqp=CAU" alt="NetflixLogo" />
    </div>
  )
}

export default Nav