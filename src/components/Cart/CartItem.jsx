import styles from './Cart.module.scss'
import plus from 'assets/icons/plus.svg'
import minus from 'assets/icons/minus.svg'

function CartItem({ itemData, cartItems, setCartItems }) {
  const { id, img, name, quantity, price } = itemData
  // 用changeType來判斷是要加還是減
  function handleChange(id, changeType) {
    let newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            changeType === 'minus' ? item.quantity - 1 : item.quantity + 1,
        }
      } else {
        return item
      }
    })
    // 將物品數量=0的商品從購物車上移除
    newCartItems = newCartItems.filter((item) => item.quantity > 0)
    setCartItems(newCartItems)
  }
  return (
    <div key={id} className={styles.CartItem}>
      <div>
        <img className={styles.ItemImg} src={img} alt={name} />
      </div>
      <div className={styles.CartItemInfo}>
        <div className={styles.CartItemNamePrice}>
          <div>
            {name}【${price}】
          </div>
          <div className={styles.CartItemPrice}>
            ${(price * quantity).toLocaleString()}
          </div>
        </div>
        <div className={styles.CartItemQuantity}>
          <img
            onClick={() => {
              handleChange(id, 'minus')
            }}
            className={styles.Icon}
            src={minus}
            alt="minus"
          />
          <div className={styles.ItemQuantity}>{quantity}</div>
          <img
            onClick={() => {
              handleChange(id, 'plus')
            }}
            className={styles.Icon}
            src={plus}
            alt="plus"
          />
        </div>
      </div>
    </div>
  )
}

export default CartItem
