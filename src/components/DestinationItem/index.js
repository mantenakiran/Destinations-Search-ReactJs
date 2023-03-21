// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li className="list-items">
      <img alt={name} className="image" src={imgUrl} />
      <p className="names">{name}</p>
    </li>
  )
}
export default DestinationItem
