import { useInView } from '../hooks/useInView'

export default function MenuCard({
  name,
  description,
  price,
  image,
  tags = [],
  variant = 'food',
}) {
  const hasImage = Boolean(image)
  const [cardRef, isInView] = useInView()

  return (
    <article
      ref={hasImage ? cardRef : undefined}
      className={[
        'menu-card',
        `menu-card--${variant}`,
        hasImage && isInView ? 'menu-card--in-view' : '',
        hasImage ? '' : `menu-card--${variant}-text`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="menu-card__showcase">
        {hasImage ? (
          <div className="menu-card__media">
            {variant === 'drink' ? (
              <div className="menu-card__rotate">
                <img
                  className="menu-card__image"
                  src={image}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <img
                className="menu-card__image"
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        ) : null}
        <div className="menu-card__panel">
          <div className="menu-card__body">
            <h3 className="menu-card__title">{name}</h3>
            {description ? <p className="menu-card__description">{description}</p> : null}
            {tags.length > 0 ? (
              <ul className="menu-card__tags" aria-label={`${name} tags`}>
                {tags.map((tag) => (
                  <li key={tag} className="menu-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="menu-card__footer">
            <span className="menu-card__price">{price} LE</span>
          </div>
        </div>
      </div>
    </article>
  )
}
