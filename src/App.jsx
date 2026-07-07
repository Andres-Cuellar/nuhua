import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Serum from './pages/Serum'
import Vela from './pages/Vela'
import Kit from './pages/Kit'
import Carrito from './pages/Carrito'
import Checkout from './pages/Checkout'
import SobreNosotros from './pages/SobreNosotros'
import Contacto from './pages/Contacto'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  const location = useLocation()
  const isComingSoon = location.pathname === '/muy-pronto'
  return (
    <CartProvider>
      <ScrollToTop />
      {!isComingSoon && <Nav />}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"                  element={<Home />} />
          <Route path="/productos"         element={<Productos />} />
          <Route path="/serum"             element={<Serum />} />
          <Route path="/vela"              element={<Vela />} />
          <Route path="/kit"               element={<Kit />} />
          <Route path="/carrito"           element={<Carrito />} />
          <Route path="/checkout"          element={<Checkout />} />
          <Route path="/sobre-nosotros"    element={<SobreNosotros />} />
          <Route path="/contacto"          element={<Contacto />} />
          <Route path="/muy-pronto"        element={<ComingSoon />} />
        </Routes>
      </AnimatePresence>
      {!isComingSoon && <Footer />}
    </CartProvider>
  )
}
