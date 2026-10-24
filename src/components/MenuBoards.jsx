import OvalBadge from './OvalBadge'
import PickButton from './PickButton'
import {
  GirlInCupsIllustration,
  FriendsCoffeeIllustration,
  CroissantCupIllustration,
} from './MenuIllustrations'

function MenuItemRow({ item, sectionId, sectionTitle, currencySuffix }) {
  const isSignature =
    item.tags?.includes('signature') || item.name.includes('*')
  const cleanName = item.name

  return (
    <li className="menu-item-row">
      <div className="menu-item-row__left">
        <span className="menu-item-row__name">
          {cleanName}
          {isSignature && !cleanName.includes('*') ? (
            <span className="menu-item-row__sig-star">*</span>
          ) : null}
        </span>
        {item.description ? (
          <p className="menu-item-row__desc">{item.description}</p>
        ) : null}
      </div>

      <div className="menu-item-row__right">
        <span className="menu-item-row__price">
          {item.price}
          {currencySuffix ? <span className="menu-item-row__currency"> {currencySuffix}</span> : null}
        </span>
        <PickButton
          sectionId={sectionId}
          sectionTitle={sectionTitle}
          name={item.name}
          price={item.price}
          className="pick-btn--board"
        />
      </div>
    </li>
  )
}

function CategoryBlock({ section, currencySuffix }) {
  if (!section) return null

  return (
    <div className="menu-category-block" id={section.id}>
      <h3 className="menu-category-block__title">{section.title}</h3>
      {section.description ? (
        <p className="menu-category-block__desc">{section.description}</p>
      ) : null}
      <ul className="menu-category-block__list">
        {section.items.map((item) => (
          <MenuItemRow
            key={item.name}
            item={item}
            sectionId={section.id}
            sectionTitle={section.title}
            currencySuffix={currencySuffix}
          />
        ))}
      </ul>
    </div>
  )
}

export default function MenuBoards({ menuSections = [], currencySuffix = 'LE' }) {
  // Find known categories by ID or fallback to indices
  const getSection = (id) => menuSections.find((s) => s.id === id)

  const coffee = getSection('coffee')
  const matcha = getSection('matcha')
  const frappes = getSection('frappe-creations')
  const mojitos = getSection('mojitos')
  const smoothies = getSection('smothies') || getSection('smoothies')
  const addOns = getSection('add-ons')
  const others = getSection('others')
  const bakery = getSection('bakery')
  const pastries = getSection('pastries')

  // Collect any remaining custom categories from Sanity
  const handledIds = new Set([
    'coffee',
    'matcha',
    'frappe-creations',
    'mojitos',
    'smothies',
    'smoothies',
    'add-ons',
    'others',
    'bakery',
    'pastries',
  ])
  const extraSections = menuSections.filter((s) => !handledIds.has(s.id))

  return (
    <div className="menu-boards-wrapper" id="menu">
      {/* Board 1: COFFEE & MATCHA */}
      {(coffee || matcha) && (
        <section className="menu-board" aria-labelledby="board-1-title">
          <header className="menu-board__top-bar">
            <span className="menu-board__status-left">OPEN EVERYDAY</span>
            <OvalBadge variant="cool" className="menu-board__badge">
              PUNCHY 5 SPECIALTY COFFEE
            </OvalBadge>
            <span className="menu-board__status-right">9AM TO 1AM</span>
          </header>

          <h2 className="menu-board__main-title" id="board-1-title">
            MENU
          </h2>

          <div className="menu-board__columns">
            <div className="menu-board__column">
              {coffee && <CategoryBlock section={coffee} currencySuffix={currencySuffix} />}
            </div>
            <div className="menu-board__column">
              {matcha && <CategoryBlock section={matcha} currencySuffix={currencySuffix} />}
              <div className="menu-board__illustration-wrap">
                <GirlInCupsIllustration width={150} />
              </div>
            </div>
          </div>

          <footer className="menu-board__footer">
            <div className="menu-board__legend">
              <span className="menu-board__legend-item">
                <strong>H</strong> : HOT
              </span>
              <span className="menu-board__legend-item">
                <strong>C</strong> : COLD
              </span>
              <span className="menu-board__legend-item">
                <strong>*</strong> : SIGNATURE
              </span>
            </div>
          </footer>
        </section>
      )}

      {/* Board 2: FRAPPE CREATIONS, MOJITOS, SMOOTHIES, ADD ONS, OTHERS */}
      {(frappes || mojitos || smoothies || addOns || others) && (
        <section className="menu-board" aria-labelledby="board-2-title">
          <header className="menu-board__top-bar">
            <span className="menu-board__status-left">OPEN EVERYDAY</span>
            <OvalBadge variant="cool" className="menu-board__badge">
              PUNCHY 5 SPECIALTY COFFEE
            </OvalBadge>
            <span className="menu-board__status-right">9AM TO 1AM</span>
          </header>

          <h2 className="menu-board__main-title" id="board-2-title">
            MENU
          </h2>

          <div className="menu-board__columns">
            <div className="menu-board__column">
              {frappes && <CategoryBlock section={frappes} currencySuffix={currencySuffix} />}
              {addOns && <CategoryBlock section={addOns} currencySuffix={currencySuffix} />}
              {others && <CategoryBlock section={others} currencySuffix={currencySuffix} />}
            </div>
            <div className="menu-board__column">
              {mojitos && <CategoryBlock section={mojitos} currencySuffix={currencySuffix} />}
              {smoothies && <CategoryBlock section={smoothies} currencySuffix={currencySuffix} />}
              <div className="menu-board__illustration-wrap">
                <FriendsCoffeeIllustration width={170} />
              </div>
            </div>
          </div>

          <footer className="menu-board__footer">
            <div className="menu-board__legend">
              <span className="menu-board__legend-item">
                <strong>H</strong> : HOT
              </span>
              <span className="menu-board__legend-item">
                <strong>C</strong> : COLD
              </span>
              <span className="menu-board__legend-item">
                <strong>*</strong> : SIGNATURE
              </span>
            </div>
          </footer>
        </section>
      )}

      {/* Board 3: BAKERY & PASTRIES */}
      {(bakery || pastries) && (
        <section className="menu-board" aria-labelledby="board-3-title">
          <header className="menu-board__top-bar">
            <span className="menu-board__status-left">OPEN EVERYDAY</span>
            <OvalBadge variant="cool" className="menu-board__badge">
              PUNCHY 5 SPECIALTY COFFEE
            </OvalBadge>
            <span className="menu-board__status-right">9AM TO 1AM</span>
          </header>

          <h2 className="menu-board__main-title" id="board-3-title">
            MENU
          </h2>

          <div className="menu-board__columns">
            <div className="menu-board__column">
              {bakery && <CategoryBlock section={bakery} currencySuffix={currencySuffix} />}
            </div>
            <div className="menu-board__column">
              {pastries && <CategoryBlock section={pastries} currencySuffix={currencySuffix} />}
              <div className="menu-board__illustration-wrap">
                <CroissantCupIllustration width={170} />
              </div>
            </div>
          </div>

          <footer className="menu-board__footer">
            <div className="menu-board__legend">
              <span className="menu-board__legend-item">
                <strong>H</strong> : HOT
              </span>
              <span className="menu-board__legend-item">
                <strong>C</strong> : COLD
              </span>
              <span className="menu-board__legend-item">
                <strong>*</strong> : SIGNATURE
              </span>
            </div>
          </footer>
        </section>
      )}

      {/* Board 4: Any extra custom categories from Sanity */}
      {extraSections.length > 0 && (
        <section className="menu-board" aria-labelledby="board-extra-title">
          <header className="menu-board__top-bar">
            <span className="menu-board__status-left">OPEN EVERYDAY</span>
            <OvalBadge variant="cool" className="menu-board__badge">
              PUNCHY 5 SPECIALTY COFFEE
            </OvalBadge>
            <span className="menu-board__status-right">9AM TO 1AM</span>
          </header>

          <h2 className="menu-board__main-title" id="board-extra-title">
            MORE SPECIALTIES
          </h2>

          <div className="menu-board__columns">
            {extraSections.map((sec) => (
              <div className="menu-board__column" key={sec.id}>
                <CategoryBlock section={sec} currencySuffix={currencySuffix} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
