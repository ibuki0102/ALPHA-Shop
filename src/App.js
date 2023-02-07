import styles from './Style.module.css'
import Cart from './components/Cart/Cart'
import StepProgress from './components/StepProgress/StepProgress'
import StepOnePanel from './components/StepPanel/StepOnePanel'
import ProgressControl from './components/ProgressControl/ProgressControl'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className={styles.Body}>
        <Header />
        <div className={styles.Container}>
          <div className={styles.LeftContainer}>
            <StepProgress />
            <StepOnePanel />
            <ProgressControl />
          </div>
          <div className={styles.RightContainer}>
            <Cart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
