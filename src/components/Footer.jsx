import style from "./Footer.module.css"
import Facebook from "../assets/img/footer-facebook.png"
import Twitter from "../assets/img/footer-twitter.png"
import Youtube from "../assets/img/footer-youtube.png"
import Pinterest from "../assets/img/footer-pinterest.png"
import Periscope from "../assets/img/footer-periscope.png"
import LinkList from "./LinkList"


function FooterTop({ dcComicsLinkList, shopLinks, dcLinks, sitesLinks }) {
  return (
    <div className={style["footer-content-container"]}>
      <div className={style["col-container"]}>
        <div className={style.col}>
          <h3>DC COMICS</h3>
          <ul>
            {dcComicsLinkList.map((link, index) => (
              <LinkList
                key={index}
                path={link.path}
                title={link.title}
              />
            ))}
          </ul>
          <h3>SHOP</h3>
          <ul>
            {shopLinks.map((link, index) => (
              <LinkList
                key={index}
                path={link.path}
                title={link.title}
              />
            ))}
          </ul>
        </div>
        <div className={style.col}>
          <h3>DC</h3>
          <ul>
            {dcLinks.map((link, index) => (
              <LinkList
                key={index}
                path={link.path}
                title={link.title}
              />
            ))}
          </ul>
        </div>
        <div className={style.col}>
          <h3>SITES</h3>
          <ul>
            {sitesLinks.map((link, index) => (
              <LinkList
                key={index}
                path={link.path}
                title={link.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function FooterBottom() {
  return (
    <div className={style["footer-bottom"]}>
      <div className={style["footer-bottom-container"]}>
        <div>
          <a href="#" className={style.btn}>SIGN-UP NOW</a>
        </div>
        <div className={style["socials-container"]}>
          <p className={style["follow-us"]}>FOLLOW US</p>
          <ul className={style.socials}>
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

export default function Footer({ dcComicsLinkList, shopLinks, dcLinks, sitesLinks }) {
  return (
    <footer className={style["footer-container"]}>
      <FooterTop dcComicsLinkList={dcComicsLinkList}
        shopLinks={shopLinks}
        dcLinks={dcLinks}
        sitesLinks={sitesLinks} />
      <FooterBottom />
    </footer>
  )
}