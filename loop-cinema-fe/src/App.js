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

function App() {
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
                  <Route index element={<MovieList/>}/>
                </Route>
                <Route path="/Movie/:id" element={<Movie/>}/>
                <Route path="/Profile" element={<UserProfile/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path = "/About" element={<About/>}/> 
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
