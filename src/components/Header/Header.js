import logo from '/Users/bigfr/ac_excercise/new-app/src/icons/logo.svg'
import search from '/Users/bigfr/ac_excercise/new-app/src/icons/search.svg'
import cart from '/Users/bigfr/ac_excercise/new-app/src/icons/cart.svg'
import moon from '/Users/bigfr/ac_excercise/new-app/src/icons/moon.svg'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.SiteHeader}>
      <div className={styles.HeaderContainer}>
        {/* <!-- navbar-menu --> */}
        <nav className={styles.NavbarMenu}>
          <ul className={styles.NavList}>
            <li className={styles.NavItem}>
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className={styles.NavItem}>
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className={styles.NavItem}>
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className={styles.NavItem}>
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className={styles.NavItem}>
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className={styles.NavList}>
            {/* <!-- search --> */}
            <li className={styles.NavItem}>
              <img src={search} alt="search" />
            </li>
            {/* <!-- cart --> */}
            <li className={styles.NavItem}>
              <img src={cart} alt="search" />
            </li>
            <li id="theme-toggle" className={styles.NavItem}>
              {/* <!-- moon --> */}
              <img src={moon} alt="search" />
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className={styles.HeaderLogoContainer} href="#">
          <img src={logo} alt="search" />
          <h3 className={styles.ShopName}>ALPHA Shop</h3>
        </a>
      </div>
    </header>
  )
}

export default Header
