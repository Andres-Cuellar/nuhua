const API_BASE = import.meta.env.DEV
  ? '/api/wc'
  : import.meta.env.VITE_WP_API_URL

const AUTH = btoa(
  `${import.meta.env.VITE_WC_CONSUMER_KEY}:${import.meta.env.VITE_WC_CONSUMER_SECRET}`
)

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${AUTH}`,
      ...options.headers,
    },
  })

  if (!res.ok) {
    const body = await res.text()
    console.error('WC API Error:', res.status, body)
    throw new Error(`WC API ${res.status}: ${body}`)
  }

  return res.json()
}

export function getProducts() {
  return request('/products?per_page=20')
}

export function getProduct(id) {
  return request(`/products/${id}`)
}

export async function createOrder(lineItems, customer) {
  const data = {
    payment_method: 'wompi',
    payment_method_title: 'Wompi',
    set_paid: false,
    billing: {
      first_name: customer?.firstName || '',
      last_name: customer?.lastName || '',
      address_1: customer?.address || '',
      city: customer?.city || '',
      state: customer?.state || '',
      postcode: customer?.postcode || '',
      country: 'CO',
      email: customer?.email || '',
      phone: customer?.phone || '',
    },
    shipping: {
      first_name: customer?.firstName || '',
      last_name: customer?.lastName || '',
      address_1: customer?.address || '',
      city: customer?.city || '',
      state: customer?.state || '',
      postcode: customer?.postcode || '',
      country: 'CO',
    },
    line_items: lineItems.map(item => ({
      product_id: item.productId,
      quantity: item.quantity,
    })),
  }

  return request('/orders', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const WP_SITE_URL = import.meta.env.DEV
  ? 'https://nuhua.local'
  : import.meta.env.VITE_WP_SITE_URL
