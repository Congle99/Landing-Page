import styles from './Footer.module.css'
import { FOOTER_LINKS } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner} data-reveal="up">
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="7" fill="var(--primary)"/>
                <rect x="5" y="7" width="18" height="11" rx="2" fill="var(--primary-light)"/>
                <rect x="3" y="19" width="22" height="2" rx="1" fill="var(--primary)"/>
              </svg>
              <span>AuraBook</span>
            </a>
            <p className={styles.tagline}>Laptop siêu mỏng thế hệ mới, thiết kế cho tương lai.</p>
          </div>

          <div className={styles.links}>
            {FOOTER_LINKS.map(({ group, links }) => (
              <div key={group} className={styles.linkGroup}>
                <div className={styles.groupTitle}>{group}</div>
                {links.map(link => (
                  <a key={link.label} href={link.href}>{link.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 AuraBook. Bảo lưu mọi quyền.</span>
          <div className={styles.legal}>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
