import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { dcComicsLinkList, dcLinks, navLinks, shopLinks, sitesLinks } from './data/linksData'

function App() {
  return (
    <>
      <Header navLinks={navLinks} />
      <Main />
      <Footer dcComicsLinkList={dcComicsLinkList}
        shopLinks={shopLinks}
        dcLinks={dcLinks}
        sitesLinks={sitesLinks} />
    </>
  )
}

export default App
