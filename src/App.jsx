import { useState, useEffect } from 'react'
import { useRevealObserver } from './hooks/useRevealObserver'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
export default function App() {
    const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  useRevealObserver()
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
         <Features />
      </main>
    </>
  )
}