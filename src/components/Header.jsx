import LogoImg from "../assets/img/dc-logo.png";
import style from "./Header.module.css";

function Logo() {
  return (
    <img src={LogoImg} alt="logo" />
  )
}

function NavBar() {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <a href="#">CHARACTERS</a>
        </li>
        <li>
          <a href="#">COMICS</a>
        </li>
        <li>
          <a href="#">MOVIES</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">GAMES</a>
        </li>
        <li>
          <a href="#">COLLECTIBLES</a>
        </li>
        <li>
          <a href="#">VIDEOS</a>
        </li>
        <li>
          <a href="#">FANS</a>
        </li>
        <li>
          <a href="#">NEWS</a>
        </li>
        <li>
          <a href="#">SHOP</a>
        </li>
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