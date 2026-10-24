import { FaTag } from 'react-icons/fa'
import MenuCard from './MenuCard'
import MenuListCard from './MenuListCard'
import TaglineWave from './TaglineWave'

import PickButton from './PickButton'

export default function MenuSection({
  id,
  title,
  tagline,
  description,
  items,
  cardVariant = 'drink',
  currencySuffix = 'LE',
}) {
  const isOffers = cardVariant === 'offers'

  return (
    <section
      className={`menu-section${isOffers ? ' menu-section--offers' : ''}`}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className={`menu-section__heading${isOffers ? ' menu-section__heading--offers' : ''}`}>
        {isOffers ? (
          <h2 className="menu-section__title menu-section__title--offers" id={`${id}-heading`}>
            <FaTag className="menu-section__title-icon" aria-hidden="true" />
            <span>{title}</span>
            <FaTag className="menu-section__title-icon" aria-hidden="true" />
          </h2>
        ) : (
          <h2 className="menu-section__title" id={`${id}-heading`}>
            {title}
          </h2>
        )}
        {description ? <p className="menu-section__description">{description}</p> : null}
        {tagline ? (
          <div className="menu-section__tagline-row">
            <p className={`menu-section__tagline${isOffers ? ' menu-section__tagline--offers' : ''}`}>
              {tagline}
            </p>
          </div>
        ) : null}
      </div>

      {cardVariant === 'extras' ? (
        <MenuListCard
          items={items}
          sectionId={id}
          sectionTitle={title}
          currencySuffix={currencySuffix}
        />
      ) : (
        <ul className={`menu-grid menu-grid--showcase${isOffers ? ' menu-grid--offers' : ''}`}>
          {items.map((item) => (
            <li key={item.name} className="menu-grid__item">
              <MenuCard
                {...item}
                sectionId={id}
                sectionTitle={title}
                variant={cardVariant}
                currencySuffix={currencySuffix}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
