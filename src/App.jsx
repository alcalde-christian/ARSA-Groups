import Header from "./components/Header/Header"
import NameAdder from "./components/NameAdder/NameAdder"
import Footer from "./components/Footer/Footer"
import ReactGA from "react-ga"
import { useEffect } from "react"
import styles from "./App.module.css"

function App() {
  useEffect(() => {
    ReactGA.initialize("G-HR5EB1RMQQ")
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header />
      
      <main className={styles.content}>
        <NameAdder />
      </main>

      <Footer />
    </div>
  )
}

export default App
