import { usePick } from '../context/PickContext'

export default function PickButton({ sectionId, sectionTitle, name, price, className = '' }) {
  const { pickItem, getQuantity } = usePick()
  const quantity = getQuantity(sectionId, name)
  const isPicked = quantity > 0

  return (
    <button
      type="button"
      className={['pick-btn', isPicked ? 'pick-btn--active' : '', className].filter(Boolean).join(' ')}
      onClick={() => pickItem({ sectionId, sectionTitle, name, price })}
      aria-pressed={isPicked}
      aria-label={
        isPicked ? `Pick ${name}, ${quantity} in your order` : `Pick ${name} for your group order`
      }
    >
      <span className="pick-btn__label">{isPicked ? 'Picked' : 'Pick'}</span>
      {isPicked ? <span className="pick-btn__count">{quantity}</span> : null}
    </button>
  )
}
