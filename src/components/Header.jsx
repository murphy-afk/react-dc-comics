import LogoImg from "../assets/img/dc-logo.png";
import style from "./Header.module.css";
import { navLinks } from "../data/linksData"
import LinkList from "./LinkList";
function Logo() {
  return (
    <img src={LogoImg} alt="logo" className={style.img} />
  )
}

function NavBar() {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {navLinks.map((link, index) => (
          <LinkList
            key={index}
            path={link.path}
            title={link.title}
            className={`${style.link} ${link.active}`}
          />
        ))}
      </ul>
    </nav>
  )
}

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}