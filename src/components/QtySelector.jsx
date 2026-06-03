import { useState } from 'react'

export default function QtySelector({ onAdd, ctaLabel = 'Agregar al carrito' }) {
  const [qty, setQty]   = useState(1)
  const [done, setDone] = useState(false)

  const handleAdd = () => {
    setDone(true)
    setTimeout(() => setDone(false), 2200)
  }

  return (
    <>
      <div className="product-qty">
        <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(q => q + 1)}>+</button>
      </div>
      <button
        className={`btn btn-dark btn-lg${done ? '' : ''}`}
        style={{ flex: 2, pointerEvents: done ? 'none' : 'auto' }}
        onClick={handleAdd}
      >
        {done ? '✓ Agregado' : ctaLabel}
      </button>
    </>
  )
}
