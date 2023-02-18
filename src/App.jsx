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
import { CartContext, initialCartData } from 'contexts/CartContext'
import { PaymentContext, initialPaymentData } from 'contexts/PaymentContext'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [cartData, setCartData] = useState(initialCartData)
  const [paymentData, setPaymentData] = useState(initialPaymentData)
  return (
    <>
      <div className={styles.Body}>
        <Header />
        <div className={styles.Container}>
          <CartContext.Provider value={[cartData, setCartData]}>
            <div className={styles.LeftContainer}>
              <StepProgress currentStep={currentStep} />
              {currentStep === 1 && <StepOnePanel />}
              {currentStep === 2 && <StepTwoPanel />}
              <PaymentContext.Provider value={[paymentData, setPaymentData]}>
                {currentStep === 3 && <StepThreePanel />}
                <ProgressControl
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </PaymentContext.Provider>
            </div>
            <div className={styles.RightContainer}>
              <Cart />
            </div>
          </CartContext.Provider>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
