import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <div className = "header">
              <div className="headerSearch">
                <button id="searchButton">
                    <i className="material-icons" id="searchIcon">search</i>
                </button>
                <input id="searchInput" type="text" placeholder='Search movies...'></input>
                {/* 
                1. Also could add the clear button as shown in the hyotts page.
                <div className="searchSuggestions">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>*/}
              </div> 
              <div className="headerProfile">
                <div className = "profile">
                    {/**CHECKOUT: Add a Link Here */}
                    <Link className="profileLink" to="/UserProfile">
                        <i className="material-icons" id="profileIcon">person_outline</i>
                    </Link>
                </div>
              </div>
            </div>
        </>
    );
}

export default Header;