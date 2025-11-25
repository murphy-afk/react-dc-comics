import "./Footer.css"
import Facebook from "../assets/img/footer-facebook.png"
import Twitter from "../assets/img/footer-twitter.png"
import Youtube from "../assets/img/footer-youtube.png"
import Pinterest from "../assets/img/footer-pinterest.png"
import Periscope from "../assets/img/footer-periscope.png"

function FooterTop() {
  return (
    <div className="footer-content-container">
      <div className="col-container">
        <div className="col">
          <h3>DC COMICS</h3>
          <ul>
            <li><a href="#">Characrets</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
          </ul>
          <h3>SHOP</h3>
          <ul>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectibles</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>DC</h3>
          <ul>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Ad choices</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Talent Workshop</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>SITES</h3>
          <ul>
            <li><a href="#">DC</a></li>
            <li><a href="#">MAD magazine</a></li>
            <li><a href="#">DC kids</a></li>
            <li><a href="#">DC universe</a></li>
            <li><a href="#">DC power visa</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-container">
        <div>
          <a href="#" className="btn">SIGN-UP NOW</a>
        </div>
        <div className="socials-container">
          <p>FOLLOW US</p>
          <ul className="socials">
            <li><a href="#"><img src={Facebook} alt="facebook" /></a></li>
            <li><a href="#"><img src={Twitter} alt="twitter" /></a></li>
            <li><a href="#"><img src={Youtube} alt="youtube" /></a></li>
            <li><a href="#"><img src={Pinterest} alt="pinterest" /></a></li>
            <li><a href="#"><img src={Periscope} alt="periscope" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer-container">
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}