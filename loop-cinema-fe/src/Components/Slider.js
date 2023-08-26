import { useState } from "react";
import "../css/components/Slider.css"
import { Link} from "react-router-dom";

function Slider() {
  const storedData = localStorage.getItem('movie_data')
  const parsedData = JSON.parse(storedData)
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = parsedData.slice(0, 4);

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
    <div className = "slider_body">
      <div className="carousel">
        <div className="left_arrow" onClick={goToPrevious}>&#8249;</div>
        <div className="right_arrow" onClick={goToNext}>&#8250;</div>
        <Link className="movie_slide_link" to={"/Movie/" + slides[currentIndex].title} state={{movieData: slides[currentIndex]}}>
          <div className="movie_slide" style={{backgroundImage: `url(${slides[currentIndex].banner})`}}>
            <hgroup className="movie_slide_detail">
              <h1>{slides[currentIndex].title}</h1>
              <p>{slides[currentIndex].apercu}</p>
            </hgroup>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Slider;