import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page, FadeUp } from '../motion'
import { useCart } from '../context/CartContext'
import { createOrder, WP_SITE_URL } from '../lib/woocommerce'

const productInfo = {
  13: {
    name: 'Radiance & Revitalizing Serum',
    price: 189000,
    priceLabel: '$189.000',
  },
  14: {
    name: 'Ritual Candle',
    price: 89000,
    priceLabel: '$89.000',
  },
  15: {
    name: 'Kit Ritual nuhua',
    price: 259000,
    priceLabel: '$259.000',
  },
}

function formatCOP(amount) {
  return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const initialCustomer = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postcode: '',
}

export default function Checkout() {
  const { items, clearCart } = useCart()
  const [customer, setCustomer] = useState(initialCustomer)
  const [checkingOut, setCheckingOut] = useState(false)
  const [error, setError] = useState('')

  if (items.length === 0) {
    return <Navigate to="/carrito" replace />
  }

  const total = items.reduce((sum, item) => {
    const info = productInfo[item.productId]
    return sum + (info ? info.price * item.quantity : 0)
  }, 0)

  const handleCustomerChange = (field) => (e) => {
    setCustomer(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCheckingOut(true)
    setError('')

    if (!customer.email || !/\S+@\S+\.\S+/.test(customer.email)) {
      setError('Por favor ingresa un email válido.')
      setCheckingOut(false)
      return
    }

    try {
      const order = await createOrder(
        items.map(i => ({
          productId: i.productId,
          quantity: i.quantity,
        })),
        { ...customer, country: 'CO' }
      )

      clearCart()
      window.location.href = `${WP_SITE_URL}/finalizar-compra/order-pay/${order.id}/?key=${order.order_key}`
    } catch (e) {
      console.error('Checkout error:', e)
      setError('No se pudo procesar el pedido. Intenta de nuevo.')
      setCheckingOut(false)
    }
  }

  const textField = (label, field, type = 'text', required = false) => (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: 'block',
          fontSize: 11,
          fontFamily: 'var(--mono)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--medium)',
          marginBottom: 4,
        }}
      >
        {label}{required ? ' *' : ''}
      </label>
      <input
        type={type}
        value={customer[field]}
        onChange={handleCustomerChange(field)}
        required={required}
        style={{
          width: '100%',
          padding: '10px 12px',
          fontSize: 14,
          fontFamily: 'var(--sans)',
          border: '1px solid var(--border)',
          background: '#fff',
          color: 'var(--dark)',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )

  return (
    <Page>
      <main style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh' }}>
        <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <FadeUp>
            <nav style={{ marginBottom: 12, fontSize: 12, color: 'var(--light)' }}>
              <Link to="/" style={{ color: 'inherit' }}>Inicio</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link to="/carrito" style={{ color: 'inherit' }}>Carrito</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--dark)' }}>Checkout</span>
            </nav>
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                marginBottom: 8,
              }}
            >
              Finalizar compra
            </h1>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 420px',
                gap: 48,
                alignItems: 'start',
              }}
              className="cart-layout"
            >
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    marginBottom: 24,
                  }}
                >
                  Datos de envío
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                  {textField('Nombre', 'firstName')}
                  {textField('Apellido', 'lastName')}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                  {textField('Email', 'email', 'email', true)}
                  {textField('Teléfono', 'phone', 'tel')}
                </div>
                {textField('Dirección', 'address')}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 16px' }}>
                  {textField('Ciudad', 'city')}
                  {textField('Departamento', 'state')}
                  {textField('Código postal', 'postcode')}
                </div>

                {error && (
                  <p
                    style={{
                      fontSize: 13,
                      color: '#c44',
                      marginTop: 24,
                      marginBottom: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  className="btn btn-gold btn-lg"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 28 }}
                  disabled={checkingOut}
                  whileTap={{ scale: 0.97 }}
                >
                  {checkingOut ? 'Procesando...' : 'Pagar'}
                </motion.button>

                <p
                  style={{
                    fontSize: 11,
                    color: 'var(--light)',
                    textAlign: 'center',
                    marginTop: 16,
                    lineHeight: 1.6,
                  }}
                >
                  Serás redirigido al checkout seguro de nuhua para completar tu pago con Wompi.
                </p>
              </form>

              {/* Order Summary */}
              <div
                style={{
                  background: 'var(--warm)',
                  padding: '32px 28px',
                  position: 'sticky',
                  top: 'calc(var(--nav-h) + 32px)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    marginBottom: 24,
                  }}
                >
                  Tu pedido
                </h3>

                {items.map((item) => {
                  const info = productInfo[item.productId]
                  if (!info) return null
                  return (
                    <div
                      key={item.productId}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: 8,
                        fontSize: 13,
                        color: 'var(--medium)',
                      }}
                    >
                      <span>
                        {info.name}
                        <span style={{ marginLeft: 6, fontSize: 11, color: 'var(--light)' }}>
                          x{item.quantity}
                        </span>
                      </span>
                      <span style={{ flexShrink: 0, marginLeft: 16 }}>
                        {formatCOP(info.price * item.quantity)}
                      </span>
                    </div>
                  )
                })}

                <div
                  style={{
                    height: 1,
                    background: 'var(--border)',
                    margin: '20px 0',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                    fontSize: 13,
                    color: 'var(--medium)',
                  }}
                >
                  <span>Subtotal</span>
                  <span>{formatCOP(total)}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                    fontSize: 13,
                    color: 'var(--medium)',
                  }}
                >
                  <span>Envío</span>
                  <span style={{ color: 'var(--gold)' }}>Por calcular</span>
                </div>

                <div
                  style={{
                    height: 1,
                    background: 'var(--border)',
                    marginBottom: 20,
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--serif)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                >
                  <span>Total</span>
                  <span>{formatCOP(total)}</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </main>
    </Page>
  )
}
