import React from "react"
import Name from "./components/name"
import Row from "./components/Row"
import request from "./components/request"


export default function App(){
  return (
    <div className="App">
      {/* <Name /> */}
      <h1>hey heloo how are you all</h1>
      <Row title="NETFLIX ORIGINAL" fetchURL={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
    </div>
  )
}