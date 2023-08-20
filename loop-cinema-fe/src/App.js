import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import MovieList from "./Pages/MovieList"
import Movie from "./Pages/Movie"
import NotFound from "./Pages/NotFound"
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import UserProfile from "./Pages/UserProfile"
import Manifest from "./data/Manifest"
import ScrolltoTop from './Components/ScrolltoTop';
import { useEffect, useState } from 'react';
import movieData from "./data/movie_data.json"
import MyAccount from "./Pages/myAccount/MyAccount"

function App() {
  // const [isLoaded, setIsLoaded] = useState("");
   
  // useEffect(() => {
  //   console.log("loading data")
  //   localStorage.setItem("movie_data", JSON.stringify(movieData))
  //   console.log("load data successfully")
  //   setIsLoaded(prev => true)
  // }, [])

  return (
    <>
    <Manifest/>
    {/**CHECKOUT: Try making it more concise. */}
      <span className="gradient"></span>
      <div className = "main_container">
        <div className = "main_page">
          <Navigation/>

          <div className = "main_content">
            <Header/>

            <div className = "main_display">
              <ScrolltoTop/>
              <Routes>
                <Route path = "/" element={<Home/>}>
                  {/* <Route index element={<MovieList/>}/> */}
                </Route>
                <Route path="/Movie/:id" element={<Movie/>}/>
                <Route path="/Profile" element={<UserProfile/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path = "/About" element={<About/>}/> 

                {/* bao hoang */}
                <Route path = "/account" element={<MyAccount />}/>
              </Routes>

            </div>
          </div>
        </div>

        <div className = "footer">Footer</div>

      </div>
    </>
  )
}

export default App;
