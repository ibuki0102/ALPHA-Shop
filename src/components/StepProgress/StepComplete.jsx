import complete from 'icons/complete.svg'
import styles from './StepProgress.module.scss'

function Complete() {
  return (
    <span className={styles.CompleteStepIcon}>
      <img src={complete} alt="complete" />
    </span>
  )
}

export default Complete
