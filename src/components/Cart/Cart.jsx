import styles from './Cart.module.css'
import cartData from './cartData'
import { useState } from 'react'
import CartItem from './CartItem'

function Cart() {
  const [cartItems, setCartItems] = useState(cartData)
  function CalculateTotal({ cartItems }) {
    let total = 0
    cartItems.map((item) => {
      total += item.price * item.quantity
      return total
    })
    return (
      <>
        <div>小計</div>
        <div className={styles.Price}>${betterDisplayQuantity(total)}</div>
      </>
    )
  }
  function betterDisplayQuantity(quantity) {
    if (Math.floor(quantity / 1000) !== 0) {
      let thousand = Math.floor(quantity / 1000)
      let remain = quantity - 1000 * thousand
      if (remain === 0) {
        return `${thousand},000`
      }
      return `${thousand},${remain}`
    } else {
      return quantity
    }
  }
  const listItems = cartItems.map((itemData) => (
    <CartItem
      itemData={itemData}
      key={itemData.id}
      cartItems={cartItems}
      setCartItems={setCartItems}
      betterDisplayQuantity={betterDisplayQuantity}
    />
  ))
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
          <CalculateTotal cartItems={cartItems} />
        </div>
      </div>
    </div>
  )
}

export default Cart
