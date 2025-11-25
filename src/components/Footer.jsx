import  "./Footer.css"

function FooterTop() {
  return (
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
  )
}

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
      <FooterTop />
      {/* top footer  */}
      {/* bottom footer  */}
      </div>
    </footer>
  )
}