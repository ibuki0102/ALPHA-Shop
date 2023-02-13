import styles from './Style.module.scss'
import Cart from './components/Cart/Cart'
import StepProgress from './components/StepProgress/StepProgress'
import StepOnePanel from './components/StepPanel/StepOnePanel'
import StepTwoPanel from './components/StepPanel/StepTwoPanel'
import StepThreePanel from './components/StepPanel/StepThreePanel'
import ProgressControl from './components/ProgressControl/ProgressControl'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <>
      <div className={styles.Body}>
        <Header />
        <div className={styles.Container}>
          <div className={styles.LeftContainer}>
            <StepProgress currentStep={currentStep} />
            {currentStep === 1 && <StepOnePanel />}
            {currentStep === 2 && <StepTwoPanel />}
            {currentStep === 3 && <StepThreePanel />}
            <ProgressControl
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
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
