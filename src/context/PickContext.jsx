import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const PickContext = createContext(null)

export function makePickId(sectionId, name) {
  return `${sectionId}::${name}`
}

export function PickProvider({ children, currencySuffix = 'EGP' }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const pickItem = useCallback((item) => {
    setItems((prev) => {
      const shouldOpen = prev.length === 0
      const id = makePickId(item.sectionId, item.name)
      const existing = prev.find((entry) => entry.id === id)

      const next = existing
        ? prev.map((entry) =>
            entry.id === id ? { ...entry, quantity: entry.quantity + 1 } : entry,
          )
        : [
            ...prev,
            {
              id,
              name: item.name,
              price: item.price,
              sectionTitle: item.sectionTitle ?? '',
              quantity: 1,
            },
          ]

      if (shouldOpen) setIsOpen(true)
      return next
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
