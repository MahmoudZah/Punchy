import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export default function CategoryNav({ menuSections }) {
  const sectionIds = useMemo(() => menuSections.map((section) => section.id), [menuSections])
  const [activeId, setActiveId] = useState(sectionIds[0])
  const scrollLock = useRef(false)
  const scrollLockTimer = useRef(null)
  const tabRefs = useRef({})
  const tabsBarRef = useRef(null)
  const tabListRef = useRef(null)

  useEffect(() => {
    if (!sectionIds.includes(activeId)) {
      setActiveId(sectionIds[0])
    }
  }, [activeId, sectionIds])

  const getActiveLine = useCallback(() => {
    const bar = tabsBarRef.current
    const height = bar?.getBoundingClientRect().height ?? 48
    return height + 10
  }, [])

  const centerTabInList = useCallback((id) => {
    const list = tabListRef.current
    const tab = tabRefs.current[id]
    if (!list || !tab) return

    const tabCenter = tab.offsetLeft + tab.offsetWidth / 2
    const nextScrollLeft = tabCenter - list.clientWidth / 2
    const maxScroll = list.scrollWidth - list.clientWidth
    const clamped = Math.max(0, Math.min(nextScrollLeft, maxScroll))

    list.scrollTo({ left: clamped, behavior: 'smooth' })
  }, [])

  const resolveActiveSection = useCallback(() => {
    const line = getActiveLine()
    let current = sectionIds[0]

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (!section) continue
      if (section.getBoundingClientRect().top <= line) {
        current = id
      }
    }

    return current
  }, [getActiveLine, sectionIds])

  useEffect(() => {
    const onScroll = () => {
      if (scrollLock.current) return

      const nextId = resolveActiveSection()
      setActiveId((prev) => (prev === nextId ? prev : nextId))
    }

    let ticking = false
    const onScrollRaf = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        onScroll()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScrollRaf, { passive: true })
    window.addEventListener('resize', onScrollRaf)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScrollRaf)
      window.removeEventListener('resize', onScrollRaf)
    }
  }, [resolveActiveSection])

  const releaseScrollLock = useCallback(() => {
    scrollLock.current = false
    if (scrollLockTimer.current) {
      window.clearTimeout(scrollLockTimer.current)
      scrollLockTimer.current = null
    }
  }, [])

  const handleSelect = (id) => {
    setActiveId(id)
    scrollLock.current = true

    if (scrollLockTimer.current) {
      window.clearTimeout(scrollLockTimer.current)
    }

    centerTabInList(id)

    const section = document.getElementById(id)
    if (section) {
      const top =
        section.getBoundingClientRect().top + window.scrollY - getActiveLine()
      window.scrollTo({ top, behavior: 'smooth' })
    }

    scrollLockTimer.current = window.setTimeout(releaseScrollLock, 900)

    if ('onscrollend' in window) {
      const onScrollEnd = () => {
        releaseScrollLock()
        window.removeEventListener('scrollend', onScrollEnd)
      }
      window.addEventListener('scrollend', onScrollEnd, { once: true })
    }
  }

  return (
    <div className="category-tabs" ref={tabsBarRef}>
      <nav className="category-tabs__nav" aria-label="Menu categories">
        <ul className="category-tabs__list" ref={tabListRef}>
          {menuSections.map((section) => {
            const label = section.navLabel ?? section.title
            const isActive = section.id === activeId

            return (
              <li key={section.id} className="category-tabs__item">
                <button
                  type="button"
                  ref={(node) => {
                    tabRefs.current[section.id] = node
                  }}
                  className={`category-tabs__tab${isActive ? ' category-tabs__tab--active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => handleSelect(section.id)}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
