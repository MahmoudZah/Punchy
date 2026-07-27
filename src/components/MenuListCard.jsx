import PickButton from './PickButton'

export default function MenuListCard({
  items,
  sectionId,
  sectionTitle,
  currencySuffix = 'LE',
}) {
  return (
    <article className="menu-list-card">
      <ul className="menu-list-card__list">
        {items.map((entry) => (
          <li key={entry.name} className="menu-list-card__item">
            <div className="menu-list-card__row">
              <span className="menu-list-card__name">{entry.name}</span>
              <span className="menu-list-card__dots" aria-hidden="true" />
              <span className="menu-list-card__price">
                {entry.price} {currencySuffix}
              </span>
            </div>
            {entry.description ? (
              <p className="menu-list-card__description">{entry.description}</p>
            ) : null}
            <div className="menu-list-card__actions">
              <PickButton
                sectionId={sectionId}
                sectionTitle={sectionTitle}
                name={entry.name}
                price={entry.price}
                className="pick-btn--list"
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
