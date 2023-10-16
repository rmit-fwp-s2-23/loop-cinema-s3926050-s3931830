import { useState } from "react";
import "../css/components/Slider.css"
import { Link} from "react-router-dom";
import { getMovieList } from "../data/movieRepo";

function Slider() {
  // const storedData = localStorage.getItem('movie_data')
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(null);

  useState( async() =>{
    const response = await getMovieList()
    console.log(response);
    setSlides(response.slice(0, 4))
    console.log(slides);
  },[]);

  const goToPrevious = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = ()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0: currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      {slides && (
          <div className = "slider_body">
          <div className="carousel">
            <div className="left_arrow" onClick={goToPrevious}>&#8249;</div>
            <div className="right_arrow" onClick={goToNext}>&#8250;</div>
            <Link className="movie_slide_link" to={"/Movie/" + slides[currentIndex].movieTitle} state={{movieData: slides[currentIndex]}}>
              <div className="movie_slide" style={{backgroundImage: `url(${slides[currentIndex].movieBanner})`}}>
                <hgroup className="movie_slide_detail">
                  <h1>{slides[currentIndex].movieTitle}</h1>
                  <p>{slides[currentIndex].movieApercu}</p>
                </hgroup>
              </div>
            </Link>
          </div>
          </div>
      )}
    </>
  );
}

export default Slider;