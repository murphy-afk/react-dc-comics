import style from "./Main.module.css";
import DigitalComics from "../assets/img/buy-comics-digital-comics.png";
import Merchandise from "../assets/img/buy-comics-merchandise.png";
import ShopLocation from "../assets/img/buy-comics-shop-locator.png";
import Subscriptions from "../assets/img/buy-comics-subscriptions.png";
import Visa from "../assets/img/buy-dc-power-visa.svg";
import comics from "./comics"

function Banner() {
  return (
    <div className={style.banner}>
    </div>
  )
}

function Content() {
  return (
    <div className={style.container}>
      <div className={style["series-container"]}>
        <ul className={style.list}>
          {comics.map((comic) => (
            <li key={comic.id} className={style.col}>
              <figure>
                <img src={comic.thumb} alt={comic.description} className={style.thumb} />
                <figcaption>{comic.series}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <Button />
      </div>
    </div>
  )
}

function Button() {
  return (
    <div className={style["btn-container"]}>
    <button className={style.btn}>LOAD MORE</button>
    </div>
  )
}

function Links() {
  return (
    <div className={style["links-container"]}>
      <nav className={style.links}>
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
    <main className={style.main}>
      <Banner />
      <Content />
      <Links />
    </main>
  )
}