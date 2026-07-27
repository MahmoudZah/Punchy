import { useInView } from '../hooks/useInView'
import PickButton from './PickButton'

export default function MenuCard({
  name,
  description,
  price,
  image,
  tags = [],
  variant = 'food',
  imageStyle = 'circle',
  sectionId,
  sectionTitle,
  currencySuffix = 'LE',
}) {
  const hasImage = Boolean(image)
  const [cardRef, isInView] = useInView()
  const useDrinkTilt = variant === 'drink' && imageStyle === 'plain'

  return (
    <article
      ref={hasImage ? cardRef : undefined}
      className={[
        'menu-card',
        `menu-card--${variant}`,
        `menu-card--img-${imageStyle}`,
        hasImage && isInView ? 'menu-card--in-view' : '',
        hasImage ? '' : `menu-card--${variant}-text`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="menu-card__showcase">
        {hasImage ? (
          <div className="menu-card__media">
            {useDrinkTilt ? (
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
                  <li
                    key={tag}
                    className={[
                      'menu-card__tag',
                      tag === 'signature' ? 'menu-card__tag--signature' : '',
                      tag === 'limited' ? 'menu-card__tag--limited' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="menu-card__footer">
            <span className="menu-card__price">
              {price} {currencySuffix}
            </span>
            <PickButton
              sectionId={sectionId}
              sectionTitle={sectionTitle}
              name={name}
              price={price}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
