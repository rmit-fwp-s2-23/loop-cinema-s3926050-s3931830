// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Slider from "../Components/Slider";
import "../css/pages/Home.css"
import MovieList from "../Components/MovieList"
// import { Outlet } from 'react-router-dom';
// import UpcomingScreeningButtons from '../Components/UpcomingScreeningButtons';
// import {StatusThemeProvider} from '../CustomHooks/StatusThemeProvider';

//Checkout How to use use LoggedIn in terms of Reviews
function Home(props){
    const [sortRatingStatus, ToggleSortRatingStatus] = useState(false);


    const sort_rating_style = {
        backgroundColor: sortRatingStatus ? "#CD242C" : "#757575"
    }

    const toggleSortRating = ()=>{
        ToggleSortRatingStatus((prev) => !prev);
    }
    return(
        <>
            <div className="home_page">

                <div className="home_slider">
                    <Slider/>
                </div>

                <div className ="movie_board">
                    {/* <StatusThemeProvider> */}
                        {/* <div className="upcomingButtons">
                            <UpcomingScreeningButtons/>
                        </div> */}
                    <div className="sort_buttons">
                        <div id="sort_label"><h1>Sort By:</h1></div>
                        <button className="sort_button sort_rating" style={sort_rating_style} onClick={toggleSortRating}>Rating</button>
                        
                    </div>
                    <div className="home_latest_movies">
                        <MovieList sortRatingStatus = {sortRatingStatus} />
                    </div>

                    {/* </StatusThemeProvider> */}
                </div>
            </div>
        </>
    )
}

export default Home