import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Serum from './pages/Serum'
import Vela from './pages/Vela'
import Kit from './pages/Kit'
import SobreNosotros from './pages/SobreNosotros'
import Contacto from './pages/Contacto'

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"                  element={<Home />} />
          <Route path="/productos"         element={<Productos />} />
          <Route path="/serum"             element={<Serum />} />
          <Route path="/vela"              element={<Vela />} />
          <Route path="/kit"               element={<Kit />} />
          <Route path="/sobre-nosotros"    element={<SobreNosotros />} />
          <Route path="/contacto"          element={<Contacto />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
