import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page, FadeUp } from '../motion'
import { useCart } from '../context/CartContext'

const productInfo = {
  59: {
    name: 'Radiance & Revitalizing Serum',
    image: '/img/serum-arch.webp',
    price: 189000,
    priceLabel: '$189.000',
    href: '/serum',
  },
  60: {
    name: 'Ritual Candle',
    image: '/img/serum-candle-lifestyle.webp',
    price: 89000,
    priceLabel: '$89.000',
    href: '/vela',
  },
  61: {
    name: 'Kit Ritual nuhua',
    image: '/img/serum-flat.webp',
    price: 259000,
    priceLabel: '$259.000',
    href: '/kit',
  },
}

function formatCOP(amount) {
  return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export default function Carrito() {
  const { items, updateQty, removeItem, clearCart } = useCart()
  const navigate = useNavigate()

  const total = items.reduce((sum, item) => {
    const info = productInfo[item.productId]
    return sum + (info ? info.price * item.quantity : 0)
  }, 0)

  return (
    <Page>
      <main style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh' }}>
        <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <FadeUp>
            <nav style={{ marginBottom: 12, fontSize: 12, color: 'var(--light)' }}>
              <Link to="/" style={{ color: 'inherit' }}>Inicio</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--dark)' }}>Carrito</span>
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
              Tu carrito
            </h1>
          </FadeUp>

          {items.length === 0 ? (
            <FadeUp delay={0.1}>
              <div style={{ padding: '80px 0', textAlign: 'center' }}>
                <p style={{ fontSize: 15, color: 'var(--medium)', marginBottom: 32 }}>
                  Tu carrito está vacío.
                </p>
                <Link to="/productos" className="btn btn-dark">
                  Ver productos
                </Link>
              </div>
            </FadeUp>
          ) : (
            <FadeUp delay={0.08}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 360px',
                  gap: 48,
                  alignItems: 'start',
                }}
                className="cart-layout"
              >
                {/* Items */}
                <div>
                  {items.map((item) => {
                    const info = productInfo[item.productId]
                    if (!info) return null
                    return (
                      <motion.div
                        key={item.productId}
                        layout
                        style={{
                          display: 'flex',
                          gap: 20,
                          padding: '24px 0',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <Link
                          to={info.href}
                          style={{
                            width: 90,
                            height: 90,
                            flexShrink: 0,
                            background: 'var(--warm)',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={info.image}
                            alt={info.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </Link>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Link
                            to={info.href}
                            style={{
                              fontFamily: 'var(--serif)',
                              fontSize: '1.05rem',
                              color: 'var(--dark)',
                              textDecoration: 'none',
                              display: 'block',
                              marginBottom: 4,
                            }}
                          >
                            {info.name}
                          </Link>
                          <p style={{ fontSize: 13, color: 'var(--medium)', marginBottom: 12 }}>
                            {info.priceLabel} COP
                          </p>

                          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <div className="product-qty" style={{ margin: 0 }}>
                              <button
                                onClick={() => updateQty(item.productId, item.quantity - 1)}
                              >
                                −
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => updateQty(item.productId, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.productId)}
                              style={{
                                border: 'none',
                                background: 'none',
                                fontSize: 11,
                                color: 'var(--light)',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontFamily: 'var(--mono)',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                              }}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>

                        <div
                          style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '1rem',
                            color: 'var(--dark)',
                            flexShrink: 0,
                          }}
                        >
                          {formatCOP(info.price * item.quantity)}
                        </div>
                      </motion.div>
                    )
                  })}

                  <div style={{ marginTop: 16 }}>
                    <button
                      onClick={() => clearCart()}
                      style={{
                        border: 'none',
                        background: 'none',
                        fontSize: 11,
                        color: 'var(--light)',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontFamily: 'var(--mono)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Vaciar carrito
                    </button>
                  </div>
                </div>

                {/* Summary */}
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
                    Resumen
                  </h3>

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
                      marginBottom: 28,
                    }}
                  >
                    <span>Total</span>
                    <span>{formatCOP(total)}</span>
                  </div>

                  <motion.button
                    className="btn btn-gold btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => navigate('/checkout')}
                    whileTap={{ scale: 0.97 }}
                  >
                    Finalizar compra
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
                </div>
              </div>
            </FadeUp>
          )}
        </div>
      </main>
    </Page>
  )
}
