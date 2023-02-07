import styles from './StepProgress.module.css'

function StepProgress() {
  return (
    <section className={styles.ProgressContainer}>
      <div>
        <h1 className={styles.CheckOut}>結帳</h1>
      </div>
      <div className={styles.ProgressGroupContainer}>
        <span className={styles.ActiveStepGroup} data-phase="address">
          <span className={styles.ActiveStepNumber}>1</span>
          <span className={styles.ProgressLabel}>寄送地址</span>
        </span>
        <div className={styles.ActiveProgressBar} data-order="1"></div>
        <span className={styles.StepGroup} data-phase="shipping">
          <span className={styles.StepNumber}>2</span>
          <span className={styles.ProgressLabel}>運送方式</span>
        </span>
        <span className={styles.ProgressBar} data-order="2"></span>
        <span className={styles.StepGroup} data-phase="credit-card">
          <span className={styles.StepNumber}>3</span>
          <span className={styles.ProgressLabel}>付款資訊</span>
        </span>
      </div>
    </section>
  )
}

export default StepProgress
