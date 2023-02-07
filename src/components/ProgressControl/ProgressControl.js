import styles from './ProgressControl.module.css'
import arrow from '/Users/bigfr/ac_excercise/new-app/src/icons/arrow.svg'

function ProgressControl() {
  return (
    <div className={styles.ProgressControlContainer}>
      <div className={styles.Hr}></div>
      <div className={styles.NextStep}>
        <button className={styles.NextStepButton}>
          下一步
          <img className={styles.Arrow} src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  )
}

export default ProgressControl
