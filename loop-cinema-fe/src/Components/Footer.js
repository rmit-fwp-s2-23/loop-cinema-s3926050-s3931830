import { Link } from "react-router-dom";
import "../css/components/Footer.css"
import logo from "../Images/logo.png"
import fb from "../Images/fb.png"
import ig from "../Images/ig.png"

const Footer = () => {
    return (
        <>
            <footer id="footer-id">
      <div className="footer-content-container" >
        <img src={logo} className="footer-logo"/>
        <div className="footer-column">
          <Link to={`/home`} style={{textDecoration: 'none'}}>
            <h2>Home</h2>
          </Link> 
        </div>
        <div className="footer-column">
          <Link to={`/AboutUs`} style={{textDecoration: 'none'}}>
            <h2>Events</h2>
          </Link> 
          <Link to={`/recipes?mealType=appetizer`}>
            Community Events
          </Link> 
          <Link to={`/recipes?category=grains`}>
            Art Shows
          </Link> 
          <Link to={`/recipes?mealType=dessert`}>
            Theater
          </Link> 
        </div>
        <div className="footer-column">
          <Link to={`/AboutUs`} style={{textDecoration: 'none'}}>
            <h2>About</h2>
          </Link> 
          <Link to='/policy' >Privacy</Link>
          <Link to='/policy' >Policies</Link>
        </div>
        <div className="footer-column">
          <Link to={`/contact`} style={{textDecoration: 'none'}}>
            <h2>Contact</h2>
          </Link> 
          <a href="https://www.facebook.com/tran.thanh.ne/" target="_blank"><img src={fb}/>Facebook</a>
          <a href="https://www.instagram.com/"><img src={ig}/>Instagram</a>
        </div>
      </div>
      <div className="footer-copyright">Copyright c 2023 Loop Cinema</div>
      </footer>
        </>
    )
}

export default Footer