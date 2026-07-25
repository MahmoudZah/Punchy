export default function MenuListCard({ items, currencySuffix = 'LE' }) {
  return (
    <article className="menu-list-card">
      <ul className="menu-list-card__list">
        {items.map((entry) => (
          <li key={entry.name} className="menu-list-card__item">
            <div className="menu-list-card__row">
              <span className="menu-list-card__name">{entry.name}</span>
              <span className="menu-list-card__dots" aria-hidden="true" />
              <span className="menu-list-card__price">{entry.price} {currencySuffix}</span>
            </div>
            {entry.description && (
              <p className="menu-list-card__description">{entry.description}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}
