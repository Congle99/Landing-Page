import { useState } from 'react'
import styles from './Newsletter.module.css'
import { NEWSLETTER_BENEFITS } from '../../data/newsletter'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!name.trim()) e.name = 'Vui lòng nhập họ tên.'
    if (!email.trim()) e.email = 'Vui lòng nhập email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Email không hợp lệ.'
    return e
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    setStatus('loading')
    try {
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, product: 'AuraBook Pro', timestamp: new Date().toISOString() }),
      })
      setStatus('success')
      setEmail('')
      setName('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className={styles.section}>
      <div className={styles.bgBlob} aria-hidden="true" />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.textCol} data-reveal="left">
            <div className={styles.label}>Đặt hàng trước</div>
            <h2 className={styles.title}>
              Nhận thông tin <span className={styles.accent}>sớm nhất</span>
            </h2>
            <p className={styles.desc}>
              Đăng ký để nhận ưu đãi ra mắt độc quyền — giảm 10% và giao hàng miễn phí cho 1.000 khách đầu tiên.
            </p>
            <div className={styles.benefits}>
              {NEWSLETTER_BENEFITS.map(b => (
                <div key={b} className={styles.benefit}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCol} data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
            {status === 'success' ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Đăng ký thành công!</h3>
                <p className={styles.successDesc}>
                  Chúng tôi sẽ liên hệ với bạn qua email khi AuraBook Pro ra mắt chính thức.
                </p>
                <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                  Đăng ký thêm
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="reg-name">Họ và tên</label>
                  <input
                    id="reg-name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={e => { setName(e.target.value); setErrors(v => ({...v, name: ''})) }}
                    autoComplete="name"
                  />
                  {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor="reg-email">Địa chỉ Email</label>
                  <input
                    id="reg-email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="email@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrors(v => ({...v, email: ''})) }}
                    autoComplete="email"
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>

                {status === 'error' && (
                  <div className={styles.errorBox}>Có lỗi xảy ra. Vui lòng thử lại.</div>
                )}

                <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <><span className={styles.spinner} />Đang gửi...</>
                  ) : (
                    <>Đăng ký nhận ưu đãi</>
                  )}
                </button>
                <p className={styles.privacy}>Chúng tôi tôn trọng quyền riêng tư của bạn. Không spam.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
