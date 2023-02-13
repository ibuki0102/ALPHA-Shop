import styles from './ProgressControl.module.scss'
import nextArrow from 'icons/nextArrow.svg'
import preArrow from 'icons/preArrow.svg'

function ProgressControl({ currentStep, setCurrentStep }) {
  function handleNextClick(event) {
    event.preventDefault()
    if (currentStep !== 3) {
      setCurrentStep(currentStep + 1)
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
