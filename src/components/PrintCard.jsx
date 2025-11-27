import style from "./Main.module.css";
export default function PrintCard(props) {
  const { thumb, description, series} = props
  return (
    <li className={style.col}>
      <figure>
        <img src={thumb} alt={description} className={style.thumb} />
        <figcaption>{series}</figcaption>
      </figure>
    </li>
  )
}
