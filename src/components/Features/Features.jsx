import styles from './Features.module.css'
import { FEATURES } from '../../data/features'

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal="up">
          <div className={styles.label}>Tính năng nổi bật</div>
          <h2 className={styles.title}>
            Mọi chi tiết đều<br />
            <span className={styles.accent}>được tinh chỉnh hoàn hảo</span>
          </h2>
          <p className={styles.subtitle}>
            Không chỉ là một chiếc laptop — AuraBook Pro là một tuyên ngôn về công nghệ và phong cách sống.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[f.color]}`}
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
