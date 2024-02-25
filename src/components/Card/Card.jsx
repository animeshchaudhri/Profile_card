import Profile_Details from "../Profile_Details/Profile_Details"
import Social_Media from "../Social_Media/Social_Media"
import Avatar from "../Avatar/Avatar"
import "./Card.css"
const card = () => {
  return (
 <div className="cardsection">
  <Avatar/>
  <Profile_Details/>
  <Social_Media/>
  </div>

  )
}

export default card