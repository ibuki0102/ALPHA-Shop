import styles from './Cart.module.css'
import plus from '/Users/bigfr/ac_excercise/new-app/src/icons/plus.svg'
import minus from '/Users/bigfr/ac_excercise/new-app/src/icons/minus.svg'

function CartItem({ ItemData }) {
  return (
    <div key={ItemData.id} className={styles.CartItem}>
      <div className={styles.CartItemImg}>
        <img
          className={styles.ItemImg}
          src={ItemData.img}
          alt={ItemData.name}
        />
      </div>
      <div className={styles.CartItemInfo}>
        <div className={styles.CartItemNamePrice}>
          <div className={styles.CartItemName}>{ItemData.name}</div>
          <div className={styles.CartItemPrice}>
            ${ItemData.price * ItemData.quantity}
          </div>
        </div>
        <div className={styles.CartItemQuantity}>
          <img className={styles.Icon} src={minus} alt="minus" />
          <div className={styles.ItemQuantity}>{ItemData.quantity}</div>
          <img className={styles.Icon} src={plus} alt="plus" />
        </div>
      </div>
    </div>
  )
}

export default CartItem
