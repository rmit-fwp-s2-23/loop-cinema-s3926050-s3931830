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


function App() {
  return (
    <>
    {/**CHECKOUT: Try making it more concise. */}
      <span className="gradient"></span>
      <div className = "container">
        <div className = "main_page">
          <Navigation/>

          <div className = "main_content">
            <Header/>
            
            <div className = "main_display">
              <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path="/MovieList"> 
                  <Route index element={<MovieList/>}/>
                  <Route path=":id" element={<Movie/>}/>
                </Route>
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
