import LogoImg from "../assets/img/dc-logo.png";
import style from "./Header.module.css";
import { navLinks } from "./linksData"

function Logo() {
  return (
    <img src={LogoImg} alt="logo" className={style.img} />
  )
}

function NavBar() {
  return (
    <nav>
      <ul className={style.list}>
        {navLinks.map((link, index) => (
          <li key={index}><a className={link.active} href="">{link.title}</a></li>
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