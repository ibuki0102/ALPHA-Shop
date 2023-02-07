import styles from './StepOnePanel.module.css'

function SelectFormat({ inputLabel, options }) {
  return (
    <>
      <div className={styles.InputLabel}>{inputLabel}</div>
      <select className={styles.Select} required>
        {options.map((option) => {
          return <option value={option.value}>{option.name}</option>
        })}
      </select>
    </>
  )
}

export default SelectFormat
