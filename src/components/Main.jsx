import "./Main.css";
import DigitalComics from "../assets/img/buy-comics-digital-comics.png";
import Merchandise from "../assets/img/buy-comics-merchandise.png";
import ShopLocation from "../assets/img/buy-comics-shop-locator.png";
import Subscriptions from "../assets/img/buy-comics-subscriptions.png";
import Visa from "../assets/img/buy-dc-power-visa.svg";


function Content() {
  return (
    <div className="content-container">
      <p>Content goes here...</p>
    </div>
  )
}

function Links() {
  return (
    // nav?
    <div className="links-container">

      <nav className="links">
        <a href="#">
          <img src={DigitalComics} alt="digital comics" />
          DIGITAL COMICS
        </a>
        <a href="#">
          <img src={Merchandise} alt="merchandise" />
          MERCHANDISE
        </a>
        <a href="#">
          <img src={ShopLocation} alt="shop location" />
          COMIC SHOP LOCATION
        </a>
        <a href="#">
          <img src={Subscriptions} alt="subscriptions" />
          SUBSCRIPTION
        </a>
        <a href="#">
          <img src={Visa} alt="dc power visa" />
          DC POWER VISA
        </a>
      </nav>
    </div>
  )
}

export default function Main() {
  return (
    <main className="main">
      <Content />
      <Links />
    </main>
  )
}