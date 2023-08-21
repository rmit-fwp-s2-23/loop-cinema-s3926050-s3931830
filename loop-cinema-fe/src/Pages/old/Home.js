import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../Components/Slider";
import "./Home.css"
import { Outlet } from 'react-router-dom';
import UpcomingScreeningButtons from '../Components/UpcomingScreeningButtons';
import {StatusThemeProvider} from '../Components/StatusThemeProvider';

function Home(){
    return(
        <>
            <div className="home_page">

                <div className="home_slider">
                    <Slider/>
                </div>

                <div className ="movie_board">
                    <StatusThemeProvider>
                        <div className="upcomingButtons">
                            <UpcomingScreeningButtons/>
                        </div>

                        <div className="home_latest_movies">
                            <Outlet/>
                        </div>
                    </StatusThemeProvider>
                </div>
            </div>
        </>
    )
}

export default Home