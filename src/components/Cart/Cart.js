import styles from './Cart.module.css'
import cartData from './cartData'
import CartItem from './CartItem'

export default function Cart() {
  const listItems = cartData.map((ItemData) => <CartItem ItemData={ItemData} />)
  return (
    <div className={styles.CartContainer}>
      <div className={styles.CartTitle}>
        <h3>購物籃</h3>
      </div>
      <div className={styles.CartItemContainer}>
        {listItems}
        <div className={styles.InfoContainer}>
          <div>運費</div>
          <div className={styles.Price}>免費</div>
        </div>
        <div className={styles.InfoContainer}>
          <div>小計</div>
          <div className={styles.Price}>$400</div>
        </div>
      </div>
    </div>
  )
}
