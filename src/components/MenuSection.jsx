import MenuCard from './MenuCard'
import MenuListCard from './MenuListCard'

export default function MenuSection({
  id,
  title,
  tagline,
  items,
  cardVariant = 'drink',
  currencySuffix = 'LE',
}) {
  return (
    <section className="menu-section" id={id} aria-labelledby={`${id}-heading`}>
      <div className="menu-section__heading">
        <h2 className="menu-section__title" id={`${id}-heading`}>
          {title}
        </h2>
        <div className="menu-section__tagline-row">
          <span className="menu-section__line" aria-hidden="true" />
          <p className="menu-section__tagline">{tagline}</p>
          <span className="menu-section__line" aria-hidden="true" />
        </div>
      </div>

      {cardVariant === 'extras' ? (
        <MenuListCard items={items} currencySuffix={currencySuffix} />
      ) : (
        <ul className="menu-grid menu-grid--showcase">
          {items.map((item) => (
            <li key={item.name} className="menu-grid__item">
              <MenuCard {...item} variant={cardVariant} currencySuffix={currencySuffix} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
