import styles from './StepOnePanel.module.scss'

function InputFormat({ inputLabel, type, placeHolder, onChange, name }) {
  return (
    <>
      <div className={styles.InputLabel}>{inputLabel}</div>
      <input
        className={styles.Input}
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
        name={name}
      />
    </>
  )
}

export default InputFormat
