export default function LinkList(props) {
  const { path, className, title } = props;
  return (
    <li>
      <a href={path} className={className}>{title}</a>
    </li>
  )
}