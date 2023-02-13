import styles from './Cart.module.scss'
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
        <div className={styles.Price}>${total.toLocaleString()}</div>
      </>
    )
  }
  const listItems = cartItems.map((itemData) => (
    <CartItem
      itemData={itemData}
      key={itemData.id}
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  ))
  return (
    <div className={styles.CartContainer}>
      <div>
        <h3>購物籃</h3>
      </div>
      <div>
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
