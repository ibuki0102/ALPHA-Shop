import styles from './StepOnePanel.module.css'

function InputFormat({ inputLabel, type, placeHolder }) {
  return (
    <>
      <div className={styles.InputLabel}>{inputLabel}</div>
      <input className={styles.Input} type={type} placeholder={placeHolder} />
    </>
  )
}

export default InputFormat
