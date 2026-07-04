import styles from './Specs.module.css'
import { SPECS } from '../../data/specs'

export default function Specs() {
  return (
    <section id="specs" className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal="up">
          <div className={styles.label}>Thông số kỹ thuật</div>
          <h2 className={styles.title}>
            Sức mạnh trong từng<br />
            <span className={styles.accent}>con số</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {SPECS.map((group, i) => (
            <div
              key={group.group}
              className={styles.card}
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <h3 className={styles.groupTitle}>{group.group}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <div key={item.label} className={styles.item}>
                    <span className={styles.itemLabel}>{item.label}</span>
                    <span className={styles.itemValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.priceRow} data-reveal="up" style={{ '--reveal-delay': '400ms' }}>
          <div className={styles.priceInfo}>
            <span className={styles.priceLabel}>Bắt đầu từ</span>
            <span className={styles.price}>29.990.000 đ</span>
          </div>
          <a href="#newsletter" className={styles.ctaBtn}>
            Đặt hàng trước — Giao tháng 8
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
