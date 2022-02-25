import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <li className="card-item">
      <Link to={`/team-matches/${id}`} className="team-item-link">
        <div className="team-item-container">
          <img
            className="team-item-image"
            src={teamImageUrl}
            alt={`item${id}`}
          />

          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
