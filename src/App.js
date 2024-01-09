import React from "react"
// import Name from "./components/name"
import Row from "./components/Row"
import request from "./components/request"
import Banner from "./components/Banner"
import Nav from "./components/Nav"

export default function App(){
  return (
    <div className="App bg-[#111]">
      {/* <Name /> */}
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchURL={request.fetchNetflixOriginals} isLargerow/>
      <Row title="Trending Now" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
      <Row title="Roance Movies" fetchURL={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
  )
}