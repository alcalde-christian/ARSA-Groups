import Header from "./components/Header/Header"
import NameAdder from "./components/NameAdder/NameAdder"
import Footer from "./components/Footer/Footer"
import styles from "./App.module.css"

function App() {
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
