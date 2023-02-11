import styles from './StepThreePanel.module.css'
import InputFormat from './InputFormat'

function StepThreePanel() {
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
            />
          </div>
          <div className={styles.CardNumber}>
            <InputFormat
              inputLabel="卡號"
              type="text"
              placeHolder="1111 2222 3333 4444"
            />
          </div>
          <div className={styles.CardValidityPeriod}>
            <InputFormat
              inputLabel="有效期限"
              type="text"
              placeHolder="MM/YY"
            />
          </div>
          <div className={styles.CardCvcNumber}>
            <InputFormat inputLabel="CVC / CCV" type="text" placeHolder="123" />
          </div>
        </section>
      </form>
    </div>
  )
}

export default StepThreePanel
