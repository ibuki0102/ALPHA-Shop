import styles from './ProgressControl.module.scss'
import nextArrow from 'assets/icons/nextArrow.svg'
import preArrow from 'assets/icons/preArrow.svg'
import { CartContext } from 'contexts/CartContext'
import { PaymentContext } from 'contexts/PaymentContext'
import { useContext } from 'react'

function ProgressControl({ currentStep, setCurrentStep }) {
  const cartData = useContext(CartContext)
  const paymentContext = useContext(PaymentContext)
  function calculateTotal(cartData) {
    let cartDatas = cartData[0]
    let total = 0
    cartDatas.map((data) => {
      return (total += data.price * data.quantity)
    })
    return total
  }
  function handleNextClick(event) {
    event.preventDefault()
    if (currentStep !== 3) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log(paymentContext[0])
      console.log(`Total Price is: $${calculateTotal(cartData)}`)
    }
  }
  function handlePreClick(event) {
    event.preventDefault()
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  return (
    <div className={styles.ProgressControlContainer}>
      <div className={styles.Hr}></div>
      <section className={styles.ButtonGroup}>
        <button
          onClick={handlePreClick}
          className={
            currentStep === 1
              ? styles.DisabledPreStepButton
              : styles.PreStepButton
          }
        >
          <img className={styles.Arrow} src={preArrow} alt="preArrow" />
          上一步
        </button>
        <button onClick={handleNextClick} className={styles.NextStepButton}>
          {currentStep === 3 ? '確認下單' : '下一步'}
          <img className={styles.Arrow} src={nextArrow} alt="nextArrow" />
        </button>
      </section>
    </div>
  )
}

export default ProgressControl
