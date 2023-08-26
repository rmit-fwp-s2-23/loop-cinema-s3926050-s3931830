// import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../Components/Slider";
import "../css/pages/Home.css"
import MovieList from "../Components/MovieList"
// import { Outlet } from 'react-router-dom';
// import UpcomingScreeningButtons from '../Components/UpcomingScreeningButtons';
// import {StatusThemeProvider} from '../CustomHooks/StatusThemeProvider';

//Checkout How to use use LoggedIn in terms of Reviews
function Home(props){

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

                        <div className="home_latest_movies">
                            <MovieList/>
                        </div>
                    {/* </StatusThemeProvider> */}
                </div>
            </div>
        </>
    )
}

export default Home