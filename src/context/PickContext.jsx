import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const PickContext = createContext(null)
const PICK_STORAGE_KEY = 'punchy:pick'

export function makePickId(sectionId, name) {
  return `${sectionId}::${name}`
}

function isValidPickItem(entry) {
  if (!entry || typeof entry !== 'object') return false

  const price = Number(entry.price)
  const quantity = Number(entry.quantity)

  return (
    typeof entry.id === 'string' &&
    typeof entry.name === 'string' &&
    Number.isFinite(price) &&
    price >= 0 &&
    typeof entry.sectionTitle === 'string' &&
    Number.isFinite(quantity) &&
    quantity > 0
  )
}

function normalizePickItem(entry) {
  return {
    id: entry.id,
    name: entry.name,
    price: Number(entry.price),
    sectionTitle: entry.sectionTitle ?? '',
    quantity: Math.floor(Number(entry.quantity)),
  }
}

function loadPickItems() {
  try {
    const raw = localStorage.getItem(PICK_STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(isValidPickItem).map(normalizePickItem)
  } catch {
    return []
  }
}

function savePickItems(items) {
  try {
    if (items.length === 0) {
      localStorage.removeItem(PICK_STORAGE_KEY)
      return
    }

    localStorage.setItem(PICK_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Ignore quota or private-mode storage errors.
  }
}

export function PickProvider({ children, currencySuffix = 'EGP' }) {
  const [items, setItems] = useState(loadPickItems)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    savePickItems(items)
  }, [items])

  const pickItem = useCallback((item) => {
    setItems((prev) => {
      const id = makePickId(item.sectionId, item.name)
      const existing = prev.find((entry) => entry.id === id)

      return existing
        ? prev.map((entry) =>
            entry.id === id ? { ...entry, quantity: entry.quantity + 1 } : entry,
          )
        : [
            ...prev,
            {
              id,
              name: item.name,
              price: Number(item.price),
              sectionTitle: item.sectionTitle ?? '',
              quantity: 1,
            },
          ]
    })
  }, [])

  const updateQuantity = useCallback((id, delta) => {
    setItems((prev) => {
      const next = prev
        .map((entry) =>
          entry.id === id ? { ...entry, quantity: entry.quantity + delta } : entry,
        )
        .filter((entry) => entry.quantity > 0)

      if (next.length === 0) setIsOpen(false)
      return next
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => {
      const next = prev.filter((entry) => entry.id !== id)
      if (next.length === 0) setIsOpen(false)
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    setItems([])
    setIsOpen(false)
  }, [])

  const openSheet = useCallback(() => setIsOpen(true), [])
  const closeSheet = useCallback(() => setIsOpen(false), [])

  const getQuantity = useCallback(
    (sectionId, name) => {
      const id = makePickId(sectionId, name)
      return items.find((entry) => entry.id === id)?.quantity ?? 0
    },
    [items],
  )

  const totalCount = useMemo(
    () => items.reduce((sum, entry) => sum + entry.quantity, 0),
    [items],
  )

  const totalPrice = useMemo(
    () => items.reduce((sum, entry) => sum + Number(entry.price) * entry.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      hasItems: items.length > 0,
      totalCount,
      totalPrice,
      currencySuffix,
      pickItem,
      updateQuantity,
      removeItem,
      clearAll,
      openSheet,
      closeSheet,
      getQuantity,
    }),
    [
      items,
      isOpen,
      totalCount,
      totalPrice,
      currencySuffix,
      pickItem,
      updateQuantity,
      removeItem,
      clearAll,
      openSheet,
      closeSheet,
      getQuantity,
    ],
  )

  return <PickContext.Provider value={value}>{children}</PickContext.Provider>
}

export function usePick() {
  const context = useContext(PickContext)
  if (!context) {
    throw new Error('usePick must be used within PickProvider')
  }
  return context
}
