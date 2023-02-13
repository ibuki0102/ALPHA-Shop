import logo from 'icons/logo.svg'
import search from 'icons/search.svg'
import cart from 'icons/cart.svg'
import moon from 'icons/moon.svg'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.SiteHeader}>
      <nav className={styles.NavbarMenu}>
        <ul className={styles.NavList}>
          <li>
            <a href="/#">男款</a>
          </li>
          <li>
            <a href="/#">女款</a>
          </li>
          <li>
            <a href="/#">最新消息</a>
          </li>
          <li>
            <a href="/#">客製商品</a>
          </li>
          <li>
            <a href="/#">聯絡我們</a>
          </li>
        </ul>
        <ul className={styles.NavList}>
          <li>
            <img src={search} alt="search" />
          </li>
          <li>
            <img src={cart} alt="cart" />
          </li>
          <li id="theme-toggle">
            <img src={moon} alt="moon" />
          </li>
        </ul>
      </nav>
      <a className={styles.HeaderLogoContainer} href="/#">
        <img src={logo} alt="logo" />
        <h3 className={styles.ShopName}>ALPHA Shop</h3>
      </a>
    </header>
  )
}

export default Header
