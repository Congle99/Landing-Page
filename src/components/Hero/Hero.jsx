import styles from './Hero.module.css'
import laptopImg from '../../assets/laptop.png'
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge} style={{ '--hero-delay': '0ms' }}>
            <span className={styles.badgeDot} />
            Mới — Ra mắt tháng 8, 2025
          </div>

          <h1 className={styles.title} style={{ '--hero-delay': '80ms' }}>
            Laptop thế hệ mới,<br />
            <span className={styles.highlight}>được tạo ra cho bạn</span>
          </h1>

          <p className={styles.desc} style={{ '--hero-delay': '160ms' }}>
            AuraBook Pro kết hợp chip AI Nova M3, màn hình OLED ProMotion 120Hz
            và pin siêu bền 20 giờ — tất cả trong thiết kế siêu mỏng 10.8mm.
          </p>

          <div className={styles.pills} style={{ '--hero-delay': '240ms' }}>
            <span className={styles.pill}>10.8mm siêu mỏng</span>
            <span className={styles.pill}>OLED 120Hz</span>
            <span className={styles.pill}>Pin 20 giờ</span>
            <span className={styles.pill}>AI tích hợp</span>
          </div>

          <div className={styles.actions} style={{ '--hero-delay': '320ms' }}>
            <a href="#newsletter" className={styles.btnPrimary}>
              Đặt hàng trước
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#features" className={styles.btnSecondary}>
              Khám phá tính năng
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>20h</span>
              <span className={styles.statLabel}>Thời lượng pin</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10.8mm</span>
              <span className={styles.statLabel}>Độ mỏng</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>1.1kg</span>
              <span className={styles.statLabel}>Trọng lượng</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.laptopWrap}>
            <div className={styles.heroImage}>
  <img
    src={laptopImg}
    alt="AuraBook Pro"
    className={styles.laptopImage}
  />
</div>
           {/* <LaptopSVG /> */}
          </div>
          <div className={styles.floatCard1}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <div>
              <div className={styles.floatTitle}>Hiệu suất AI</div>
              <div className={styles.floatSub}>40 TOPS neural engine</div>
            </div>
          </div>
          <div className={styles.floatCard2}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
            </svg>
            <div>
              <div className={styles.floatTitle}>4K OLED Pro</div>
              <div className={styles.floatSub}>1 tỷ màu sắc</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LaptopSVG() {
  return (
    <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AuraBook Pro laptop">
      {/* Screen base */}
      <rect x="60" y="20" width="400" height="270" rx="14" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="2"/>
      {/* Screen bezel inner */}
      <rect x="74" y="34" width="372" height="242" rx="8" fill="var(--bg-secondary)"/>
      {/* Screen gradient */}
      <defs>
        <linearGradient id="screen" x1="74" y1="34" x2="446" y2="276" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary-light)" stopOpacity="0.4"/>
          <stop offset="1" stopColor="var(--accent-light)" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="gloss" x1="74" y1="34" x2="260" y2="155" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect x="74" y="34" width="372" height="242" rx="8" fill="url(#screen)"/>
      <rect x="74" y="34" width="372" height="242" rx="8" fill="url(#gloss)"/>
      {/* UI mock on screen */}
      <rect x="90" y="52" width="340" height="16" rx="4" fill="var(--bg-card)" fillOpacity="0.6"/>
      <rect x="90" y="78" width="200" height="60" rx="8" fill="var(--primary)" fillOpacity="0.15"/>
      <rect x="98" y="88" width="120" height="10" rx="3" fill="var(--primary)" fillOpacity="0.5"/>
      <rect x="98" y="104" width="80" height="8" rx="3" fill="var(--text-muted)" fillOpacity="0.4"/>
      <rect x="300" y="78" width="120" height="60" rx="8" fill="var(--accent)" fillOpacity="0.15"/>
      <rect x="308" y="96" width="60" height="8" rx="3" fill="var(--accent)" fillOpacity="0.5"/>
      <rect x="308" y="112" width="40" height="6" rx="3" fill="var(--text-muted)" fillOpacity="0.4"/>
      <rect x="90" y="154" width="340" height="8" rx="3" fill="var(--primary-light)" fillOpacity="0.3"/>
      <rect x="90" y="168" width="280" height="8" rx="3" fill="var(--primary-light)" fillOpacity="0.2"/>
      <rect x="90" y="182" width="320" height="8" rx="3" fill="var(--primary-light)" fillOpacity="0.2"/>
      <rect x="90" y="210" width="100" height="28" rx="6" fill="var(--primary)" fillOpacity="0.7"/>
      <rect x="200" y="210" width="80" height="28" rx="6" fill="var(--border)" fillOpacity="0.8"/>
      {/* Camera dot */}
      <circle cx="260" cy="27" r="3" fill="var(--border)"/>
      {/* Base/keyboard */}
      <path d="M30 296 L60 294 L460 294 L490 296 Q510 298 510 310 L510 320 Q510 330 500 330 L20 330 Q10 330 10 320 L10 310 Q10 298 30 296Z" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1.5"/>
      {/* Keyboard area */}
      <rect x="80" y="298" width="360" height="26" rx="4" fill="var(--bg-secondary)"/>
      {/* Key rows */}
      {[0,1,2,3].map(row => (
        Array.from({length: 13}, (_, i) => (
          <rect key={`${row}-${i}`} x={84 + i*27} y={300 + row*6} width="24" height="4" rx="1.5" fill="var(--border)" fillOpacity="0.8"/>
        ))
      ))}
      {/* Trackpad */}
      <rect x="210" y="302" width="100" height="18" rx="4" fill="var(--border)" fillOpacity="0.6"/>
      {/* Hinge shadow */}
      <rect x="60" y="288" width="400" height="6" rx="0" fill="var(--primary)" fillOpacity="0.06"/>
    </svg>
  )
}
