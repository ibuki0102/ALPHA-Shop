import styles from './StepThreePanel.module.scss'
import InputFormat from './InputFormat'
import { useContext } from 'react'
import { PaymentContext } from 'contexts/PaymentContext'

function StepThreePanel() {
  const [paymentData, setPaymentData] = useContext(PaymentContext)
  function handleInputChange(event) {
    setPaymentData({
      ...paymentData,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <div className={styles.FormContainer}>
      <form data-phase="credit-card">
        <h3 className={styles.FormTitle}>付款資訊</h3>
        <section className={styles.FormBody}>
          <div className={styles.CardHolderName}>
            <InputFormat
              inputLabel="持卡人姓名"
              type="text"
              placeHolder="John Doe"
              name="cardOwner"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.CardNumber}>
            <InputFormat
              inputLabel="卡號"
              type="text"
              placeHolder="1111 2222 3333 4444"
              name="cardNumber"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.CardValidityPeriod}>
            <InputFormat
              inputLabel="有效期限"
              type="text"
              placeHolder="MM/YY"
              name="cardValidDate"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.CardCvcNumber}>
            <InputFormat
              inputLabel="CVC / CCV"
              type="text"
              placeHolder="123"
              name="cardCCV"
              onChange={handleInputChange}
            />
          </div>
        </section>
      </form>
    </div>
  )
}

export default StepThreePanel
