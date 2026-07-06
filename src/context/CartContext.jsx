import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)

function loadCart() {
  try {
    const stored = localStorage.getItem('nuhua_cart')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  localStorage.setItem('nuhua_cart', JSON.stringify(items))
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(i => i.productId === action.item.productId)
      let next
      if (existing) {
        next = state.map(i =>
          i.productId === action.item.productId
            ? { ...i, quantity: i.quantity + action.item.quantity }
            : i
        )
      } else {
        next = [...state, action.item]
      }
      saveCart(next)
      return next
    }
    case 'UPDATE_QTY': {
      const next = state
        .map(i =>
          i.productId === action.productId
            ? { ...i, quantity: action.quantity }
            : i
        )
        .filter(i => i.quantity > 0)
      saveCart(next)
      return next
    }
    case 'REMOVE_ITEM': {
      const next = state.filter(i => i.productId !== action.productId)
      saveCart(next)
      return next
    }
    case 'CLEAR': {
      saveCart([])
      return []
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', item })
  const updateQty = (productId, quantity) =>
    dispatch({ type: 'UPDATE_QTY', productId, quantity })
  const removeItem = (productId) =>
    dispatch({ type: 'REMOVE_ITEM', productId })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  return (
    <CartContext.Provider
      value={{ items, totalItems, addItem, updateQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
