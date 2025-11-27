export default function LinkList(props) {
  return (
    <li key={props.index}>
      <a href={props.path} className={props.className}>{props.title}</a>
    </li>
  )
}