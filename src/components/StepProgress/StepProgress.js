import styles from './StepProgress.module.css'
import StepComplete from './StepComplete'

function Step({ currentStep, progressLabel, stepNumber }) {
  return (
    <span
      className={
        currentStep >= stepNumber ? styles.ActiveStepGroup : styles.StepGroup
      }
    >
      {currentStep > stepNumber ? (
        <StepComplete />
      ) : currentStep < stepNumber ? (
        <span className={styles.StepNumber}>{stepNumber}</span>
      ) : (
        <span className={styles.ActiveStepNumber}>{stepNumber}</span>
      )}
      <span className={styles.ProgressLabel}>{progressLabel}</span>
    </span>
  )
}

function StepProgress({ currentStep }) {
  return (
    <section className={styles.ProgressContainer}>
      <div>
        <h1 className={styles.CheckOut}>結帳</h1>
      </div>
      <div className={styles.ProgressGroupContainer}>
        <Step
          currentStep={currentStep}
          progressLabel="寄送地址"
          stepNumber={1}
        />
        <div className={styles.ActiveProgressBar}></div>
        <Step
          currentStep={currentStep}
          progressLabel="運送方式"
          stepNumber={2}
        />
        <span
          className={
            currentStep !== 1 ? styles.ActiveProgressBar : styles.ProgressBar
          }
        ></span>
        <Step
          currentStep={currentStep}
          progressLabel="付款資訊"
          stepNumber={3}
        />
      </div>
    </section>
  )
}

export default StepProgress
