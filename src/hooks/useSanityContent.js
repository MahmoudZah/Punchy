import { useEffect, useState } from 'react'
import { menuSections as fallbackMenuSections } from '../data/menu'
import { client } from '../sanity/client'
import { mapMenuSections, mapSiteSettings } from '../sanity/mapContent'
import { MENU_QUERY, SITE_SETTINGS_QUERY } from '../sanity/queries'

const defaultSiteSettings = mapSiteSettings({})
const mappedFallbackMenu = mapMenuSections(fallbackMenuSections)

export function useSanityContent() {
  const [menuSections, setMenuSections] = useState(client ? [] : mappedFallbackMenu)
  const [siteSettings, setSiteSettings] = useState(defaultSiteSettings)
  const [source, setSource] = useState('local')
  const [isLoading, setIsLoading] = useState(Boolean(client))

  useEffect(() => {
    if (!client) {
      setIsLoading(false)
      return undefined
    }

    let cancelled = false

    async function loadContent() {
      try {
        const [categories, settings] = await Promise.all([
          client.fetch(MENU_QUERY),
          client.fetch(SITE_SETTINGS_QUERY),
        ])

        if (cancelled) return

        const mappedMenu = mapMenuSections(categories)
        if (mappedMenu.length > 0) {
          setMenuSections(mappedMenu)
          setSource('sanity')
        } else {
          setMenuSections(mappedFallbackMenu)
          setSource('local')
        }

        setSiteSettings(mapSiteSettings(settings))
      } catch (error) {
        console.warn('Sanity content unavailable, using local menu data.', error)
        if (!cancelled) {
          setMenuSections(mappedFallbackMenu)
          setSource('local')
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    loadContent()

    return () => {
      cancelled = true
    }
  }, [])

  return { menuSections, siteSettings, source, isLoading }
}
