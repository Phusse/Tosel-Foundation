import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)

    // Dynamic document title based on route
    const titleMap = {
      '/': 'Home | Tosel Foundation',
      '/about': 'About Us | Tosel Foundation',
      '/programs': 'Our Programs | Tosel Foundation',
      '/contact': 'Contact Us | Tosel Foundation',
      '/donate': 'Donate | Tosel Foundation',
    }
    document.title = titleMap[pathname] || 'Tosel Foundation'
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />}     />
          <Route path="/about"   element={<About />}    />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/donate"  element={<Donate />}   />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
