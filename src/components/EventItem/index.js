// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsList, clickCard, clickedForStatus} = props
  const {id, imageUrl, name, location, registrationStatus, isClicked} =
    eventsList
  const classStyle = isClicked ? 'image-style' : ''
  // console.log(isClicked)
  const clicking = () => {
    clickCard(id)
    clickedForStatus(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="buttn" onClick={clicking}>
        <img
          src={imageUrl}
          alt="event"
          className={`image-event-item ${classStyle}`}
        />
      </button>
      <p className="heading-card-image">{name}</p>
      <p className="para-card-image">{location}</p>
    </li>
  )
}
export default EventItem
