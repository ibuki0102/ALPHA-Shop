import styles from './StepTwoPanel.module.css'

function StepTwoPanel() {
  return (
    <div className={styles.FormContainer}>
      <form data-phase="shipping">
        <h3 className={styles.FormTitle}>運送方式</h3>
        <section className={styles.FormBody}>
          <label className={styles.RadioGroup} data-price="0">
            <input
              id={styles.ShippingStandard}
              className={styles.RadioInput}
              type="radio"
              name="shipping"
              onChange={(e) => {}}
              checked
            />
            <div className={styles.RadioInfo}>
              <div>標準運送</div>
              <div className={styles.Period}>約 3~7 個工作天</div>
            </div>
            <div className={styles.Price}>免費</div>
            <div className={styles.RadioBoxBorder}></div>
          </label>
          <label className={styles.RadioGroup} data-price="500">
            <input
              id={styles.ShippingDhl}
              className={styles.RadioInput}
              type="radio"
              name="shipping"
              onChange={(e) => {}}
            />
            <div className={styles.RadioInfo}>
              <div>DHL 貨運</div>
              <div className={styles.Period}>48 小時內送達</div>
            </div>
            <div className={styles.Price}>$500</div>
            <div className={styles.RadioBoxBorder}></div>
          </label>
        </section>
      </form>
    </div>
  )
}

export default StepTwoPanel
