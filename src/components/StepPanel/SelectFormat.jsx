import styles from './StepOnePanel.module.scss'

function SelectFormat({ inputLabel, options }) {
  return (
    <div>
      <div className={styles.InputLabel}>{inputLabel}</div>
      <select className={styles.Select} required>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectFormat
