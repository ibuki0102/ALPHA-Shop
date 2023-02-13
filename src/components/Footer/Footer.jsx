import logo from 'icons/logo.svg'
import fb from 'icons/fb.svg'
import ig from 'icons/ig.svg'
import whoscall from 'icons/whoscall.svg'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.SiteFooter}>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterLogoContainer}>
          <img src={logo} alt="logo" />
          <h3 className={styles.ShopName}>ALPHA Shop</h3>
        </div>
        <section>
          <h2>客戶服務</h2>
          <div>
            <a className={styles.PageLink} href="/#">
              運送說明
            </a>
            <a className={styles.PageLink} href="/#">
              退換貨相關
            </a>
            <a className={styles.PageLink} href="/#">
              付款資訊
            </a>
            <a className={styles.PageLink} href="/#">
              FAQ
            </a>
          </div>
        </section>
        <section>
          <h2>關於我們</h2>
          <div>
            <a className={styles.PageLink} href="/#">
              品牌故事
            </a>
            <a className={styles.PageLink} href="/#">
              媒體聯繫
            </a>
            <a className={styles.PageLink} href="/#">
              Press kit
            </a>
          </div>
        </section>
        <section>
          <h2>資訊</h2>
          <div>
            <a className={styles.PageLink} href="/#">
              隱私權政策
            </a>
            <a className={styles.PageLink} href="/#">
              Cookie
            </a>
            <a className={styles.PageLink} href="/#">
              GDPR
            </a>
          </div>
        </section>
        <section>
          <h2>追蹤 ALPHA Shop</h2>
          <div>
            <div className={styles.TelInfo}>+886 02123-45678</div>
            <div className={styles.SocialIconGroup}>
              <img src={fb} alt="fb" />
              <img src={ig} alt="ig" />
              <img src={whoscall} alt="whoscall" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
