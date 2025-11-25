import "./Main.css";

function Content() {
  return (
    <div className="content-container">
      <p>Content goes here...</p>
    </div>
  )
}

export default function Main() {
  return (
    <main className="main">
      <Content />
      {/* info bar (links) */}
    </main>
  )
}