import styles from './StepOnePanel.module.css'
import InputFormat from './InputFormat'
import SelectFormat from './SelectFormat'
import stepOneOption from './StepOneOption'

function StepOnePanel() {
  return (
    <form data-phase="address">
      <h3 className={styles.FormTitle}>寄送地址</h3>
      <section className={styles.AddressContainer}>
        <div className={styles.Pronouns}>
          <SelectFormat inputLabel="稱謂" options={stepOneOption.pronouns} />
        </div>
        <div className={styles.Name}>
          <InputFormat inputLabel="姓名" type="text" placeHolder="請輸入姓名" />
        </div>
        <div className={styles.Phone}>
          <InputFormat
            inputLabel="電話"
            type="tel"
            placeHolder="請輸入行動電話"
          />
        </div>
        <div className={styles.Email}>
          <InputFormat
            inputLabel="Email"
            type="email"
            placeHolder="請輸入電子郵件"
          />
        </div>
        <div className={styles.City}>
          <SelectFormat inputLabel="縣市" options={stepOneOption.city} />
        </div>
        <div className={styles.Address}>
          <InputFormat inputLabel="地址" type="text" placeHolder="請輸入地址" />
        </div>
      </section>
    </form>
  )
}

export default StepOnePanel
