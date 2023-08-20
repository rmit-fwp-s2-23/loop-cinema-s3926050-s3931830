import {Link} from "react-router-dom";
import logo from "../Images/logo.png"
import "./Navigation.css"

function Navigation(){
    return(
        <div className = "main_nav">
            <div className = "navigation">
              <Link className="homeLink" to="/">
                <div className ="nav_logo">
                  {/**Do conditnoa */}
                  <img src={logo} alt="Logo"/>
                </div>
              </Link>
              <nav>
                <ul id="pageLinks">
                  <li>
                    <Link className = "pageLink" to="/">
                      <div className ="pageLinkTab">
                        <i className="material-icons" id="pageIcon">home</i>
                        <button className = "pageLinkButton">HOME</button>
                      </div>
                    </Link>
                  </li>
                  {/* <li>
                    <Link className = "pageLink" to="/MovieList">
                      <div className ="pageLinkTab">
                        <i className="material-icons" id="pageIcon">theaters</i>
                        <button className = "pageLinkButton">MOVIES</button>
                      </div>
                    </Link>
                  </li> */}
                  <li>
                    <Link className = "pageLink" to="/About">
                      <div className ="pageLinkTab">
                        <i className="material-icons" id="pageIcon">info</i>
                        <button className = "pageLinkButton">ABOUT</button>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
    );
}

export default Navigation